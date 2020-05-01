const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const User = require('./database/index.js');

const PORT = process.env.PORT || 4000;

app.use(bodyParser());
app.use(fileUpload());

// Route for actually playing an individual video
// Another route will handle serving an array of available video urls to the client
app.get('/api/videos/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  const options = {
    root: path.join(__dirname, 'videos'),
  };
  res.sendFile(fileName, options, (err) => {
    if (err) {
      console.error('ERROR: ', err);
      // res.sendStatus(404);
    } else console.log('Sent: ', fileName);
  });
});

// TODO: Data pertaining to the video description, user, and url need to be saved in MongoDB
app.post('/api/upload', (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file was uploaded.');
  }

  req.file.mv(path.join(__dirname, 'videos', file), (err) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    res.sendStatus(201);
  });
});

app.post('/testroute', (req, res) => {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  user.save((err) => {
    if (err) res.send(err);
    else res.send(user);
  });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
