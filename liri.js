require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require('axios');
var fs = require('fs');
var moment = require('moment');
var command = process.argv[2];
var value = process.argv[3];

// fs.appendFile('log.txt', command + ",", function (err) {
//     if (err) throw err;
// });

switch (command) {
    case "concert-this":
        concertThis(value);
        break;
    case "spotify-this-song":
        spotifySong(value);
        break;
    case "movie-this":
        movieThis(value);
        break;
    case "do-what-it-says":
        doThis(value);
        break;
};


function concertThis(artist) {
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function (response) {
            if (response.data[0].venue != undefined) {
                console.log("Event Veunue: " + response.data[0].venue.name);
                console.log("Event Location: " + response.data[0].venue.city);
                var eventDateTime = moment(response.data[0].datetime);
                console.log("Event Date & Time: " + eventDateTime.format("dddd, MMMM Do YYYY"));
            }
            else {
                console.log("No results found.");
            }
        })
        .catch(function (error) {
            console.log(error);
        });


}

function spotifySong(value) {
    if (!value) {
        value = "The Sign";
    }
    spotify
        .search({ type: 'track', query: value })
        .then(function (response) {
            for (var i = 0; i < 5; i++) {
                var spotifyResults =
                    "--------------------------------------------------------------------" +
                    "\nArtist(s): " + response.tracks.items[i].artists[0].name +
                    "\nSong Name: " + response.tracks.items[i].name +
                    "\nAlbum Name: " + response.tracks.items[i].album.name +
                    "\nPreview Link: " + response.tracks.items[i].preview_url;

                console.log(spotifyResults);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}

function movieThis(value) {
    if (!value) {
        value = "Mr. Nobody";
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");
    }
    axios.get("https://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            var movieResults =
                "-------------------------Movie--------------------------------------" +
                "\nTitle: " + response.data.Title +
                "\nYear of Release: " + response.data.Year +
                "\nIMDB Rating: " + response.data.imdbRating +
                "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value +
                "\nCountry: " + response.data.Country +
                "\nLanguage: " + response.data.Language +
                "\nPlot: " + response.data.Plot +
                "\nActors: " + response.data.Actors +
                "\n------------------------The_End-----------------------------------";

            console.log(movieResults);
        })
        .catch(function (error) {
            console.log(error);
        });

}
function doThis() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        var dataArr = data.split(",");
        spotifySong(dataArr[1])
        // If the code experiences any errors it will log the error to the console.
        if (error) {
            return console.log(error);
        }
    });
}

