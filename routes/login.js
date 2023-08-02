const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('login.html', { root: './public' });
});

router.post('/', (req, res) => {
    const { username } = req.body;
    if (username) {
        res.cookie('username', username);
        res.redirect('/chat');
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
