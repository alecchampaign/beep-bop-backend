const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(bodyParser());

app.get('/api/videos', (req, res) => {});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
