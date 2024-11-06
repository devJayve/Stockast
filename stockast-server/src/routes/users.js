const app = require('express');
const {getAuth, signInWithCredential, GoogleAuthProvider } = require("firebase-admin/auth");
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

router.post('/login/google', (req) => {
    const { token } = req.body;

    const auth = getAuth();
    const credential = GoogleAuthProvider.credential(token);
    signInWithCredential(auth, credential).catch((error) => {
        console.error(error);
    });
});

router.post('/logout', (req, res) => {
    res.clearCookie('session');
    res.status(200).send("Logged out successfully");
});




module.exports = router;