//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/angular'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular/'}),
);

// Start the app by listening on the default Heroku port
const port = process.env.PORT || 5000;
app.listen(port, ()=> console.log('listening song on port 5000'));