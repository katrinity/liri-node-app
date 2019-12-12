# liri-node-app

LIRI Bot

In this assignment, I created LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

liri.js can take in one of the following commands:
`concert-this`
`spotify-this-song`
`movie-this`
`do-what-it-says`

Deployment
Clone repo
Run `npm install`
At command prompt run `node liri.js <instruction from above>`

Screenshots

Output for `concert-this` command. This will search the Bands in Town Artist Events API for an artist and render the name of the venue, location and date of each event to the terminal:
<img width="715" alt="Concert" src="https://user-images.githubusercontent.com/42060484/70702064-4ceabd80-1c82-11ea-8c4c-a02fa0a13138.png">


Output for `spotify-this-song` command. This will show the following information about the song in your terminal/bash window:
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from:
<img width="847" alt="song" src="https://user-images.githubusercontent.com/42060484/70702103-61c75100-1c82-11ea-8935-2f61a94b18d1.png">


Output for `movie-this` command. This will output the following information to your terminal/bash window:
  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
<img width="849" alt="Movie" src="https://user-images.githubusercontent.com/42060484/70702146-773c7b00-1c82-11ea-945c-72d38d8ba2b7.png">

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
It's on Netflix!

<img width="845" alt="Screen Shot 2019-12-12 at 1 57 12 AM" src="https://user-images.githubusercontent.com/42060484/70702375-d00c1380-1c82-11ea-9193-76e9b7d3b880.png">


Technologies Used:
NodeJS
JavaScript
Spotify API
Axios
OMDB API
NPM spotify-web-api-node
NPM dotenv
Bands in Town Artist Events API 