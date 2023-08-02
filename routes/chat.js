const express = require('express');
const router = express.Router();

const messages = [];

router.get('/', (req, res) => {
    const username = req.cookies.username;
    res.send(`
        <h1>Welcome to the Chat App</h1>
        <form action="/chat/message" method="post">
            <input type="text" name="message" placeholder="Type your message..." required>
            <button type="submit">Send</button>
        </form>
        <h2>Messages:</h2>
        <ul>
            ${messages.map(msg => `<li>${msg.username}: ${msg.text}</li>`).join('')}
        </ul>
    `);
});

router.post('/message', (req, res) => {
    const username = req.cookies.username;
    const { message } = req.body;
    if (username && message) {
        messages.push({ username, text: message });
    }
    res.redirect('/chat');
});

module.exports = router;
