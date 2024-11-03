const express = require('express');

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
    res.send('/ : 안녕하세요');
})

app.listen(PORT, () => {
    console.log(`${PORT} : listen`);
});



