const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const loginRoutes = require('./routes/login');
const chatRoutes = require('./routes/chat');

app.use('/login', loginRoutes);
app.use('/chat', chatRoutes);

// Redirect root path to the login page
app.get('/', (req, res) => {
    res.redirect('/login');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
