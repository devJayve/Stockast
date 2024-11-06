const app = require('express');
const jwt = require('jsonwebtoken');
const admin = require('firebase-admin');
const {getAuth, signInWithCredential } = require("firebase-admin/auth");
const router = app.Router();

// 예: GET /users
router.get('/', (req, res) => {
    getAuth()
        .getUser(req.get('id'))
        .then((userRecord) => {
            console.log(userRecord);
        })
        .catch((error) => {
            console.error(error);
        })
});

router.post('/login/google', async (req, res) => {
    try {
        const { token } = req.body;

        const auth = getAuth();
        const decodeToken = await auth.verifyIdToken(token);
        const uid = decodeToken.uid;

        const jwtToken = jwt.sign({userId : uid}, process.env.JWT_SECRET, {expiresIn: '1h'})

        res.status(200).send({accessToken : jwtToken});
    } catch (error) {
        console.error(error);
    }
});

router.post('/logout', (req, res) => {
    res.clearCookie('session');
    res.status(200).send("Logged out successfully");
});

router.head('/verify', (req, res) => {
    const auth = req.headers.authorization;
    console.log(auth);

    if (!auth || !auth.startsWith('Bearer ')) {
        console.log('unauthorized');
        return res.status(401).send('token or header is problem');
    }
    const token = auth.split(' ')[1];

    try {
        jwt.verify(token, process.env.JWT_SECRET);

        res.status(200).send('success');
    } catch (error) {
        console.log('verify failed', error);
        return res.status(401).send('Token verification failed');
    }
});




module.exports = router;