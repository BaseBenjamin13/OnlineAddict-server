
const express = require("express");
const cors = require('cors');
const app = express();


//CONTROLLERS
const videoGamesController = require('./controllers/videogames')


app.use(express.json());
app.use(cors());

app.get('/favicon.ico', (req, res) => {
    // console.log('favicon')
})

app.use('/videogames', videoGamesController);

const port = process.env.PORT || 5005;
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});