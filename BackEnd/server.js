const express = require('express')
const app = express()
const port = 4000
//Install Cors - Cross Origin Resource Sharing.(ON SERVER)
const cors = require('cors');


app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Parse application/json
app.use(express.json());
//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false}));


app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Now server displays out movie data in JSON Format.
app.get('/api/movies', (req, res) => {
    const mymovies = [

        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }

    ];
    //Able to pass more than one object/message in response.
    res.status(200).json({ movies: mymovies });
})

app.post('api/movies', (req,res)=>
{
console.log('Movie Recieved');
console.log(req.body.title);
console.log(req.body.year);
console.log(req.body.poster);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})