//search function has been called - Check the HTML Page
async function searchMovie() {
    const apiKey = `23ff2b52`; // API_KEY
    const movieInput = document.getElementById('movieInput').value.trim();//trim is to remove whitespaces
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieInput)}`;//encodeURIComponent is properly formatted and can be read by the browser

    //we are trying to fetch the api_url(webpage) using my API KEY from OMBD API;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) { //if the response is not okay
            throw new Error('Network response was not ok');//throw - creates a custom error, new is a constructor, Error is an inbuilt system in JS
        }
        const movieData = await response.json();//data will be converted to json() data which we can read
        displayMovieInfo(movieData);//calling function of DisplayMovieInfo
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}
//function for Displaying Movie Information
function displayMovieInfo(movieData) { //movieData is a parameter
    const movieInfoDiv = document.getElementById('movieInfo');
    movieInfoDiv.innerHTML = '';//where the results will be displayed

    if (movieData.Response === 'True') {
        const title = document.createElement('h2');
        title.textContent = movieData.Title;
        title.id = "movie-title";// id for title

        const plot = document.createElement('p');
        plot.textContent = `Plot :
         ${ movieData.Plot} `;
        plot.id = "movie-plot"; //id for plot

        const poster = document.createElement("img");
        poster.src = movieData.Poster;//source of the image
        poster.width = "200";
        poster.height = "250";
        poster.textContent = `${movieData.Title} Poster`;//how to access the image of movie
        poster.id = "movie-img";//id for image

        const actors = document.createElement("h3");
        actors.textContent = `Actors: ${movieData.Actors}`;
        actors.id = "movie-actors"; // id for actors

        const runtime = document.createElement("p");
        runtime.textContent = `${movieData.Runtime}`;
        runtime.id = "movie-runtime"; //id for runtime

        const genres = document.createElement("p");
        const genresList = movieData.Genre.replace(/,/g, '');
        genres.textContent = `${genresList}`;
        genres.id = "movie-genres"; // id for genres

        const rated = document.createElement("p");
        rated.textContent = ` ${movieData.Rated}`;
        rated.id = "movie-rated"; //id for rated

        const year = document.createElement("p");
        year.textContent = `${movieData.Year}`;
        year.id = "movie-year";

        const director = document.createElement("p");
        director.textContent = ` Director : ${movieData.Director}`;
        director.id = "movie-director";
        movieInfoDiv.appendChild(title);
        movieInfoDiv.appendChild(poster);
        movieInfoDiv.appendChild(year);
        movieInfoDiv.appendChild(runtime);
        movieInfoDiv.appendChild(genres);
        movieInfoDiv.appendChild(rated);
        movieInfoDiv.appendChild(plot);
        movieInfoDiv.appendChild(actors);
        movieInfoDiv.appendChild(director);
    } else {
        movieInfoDiv.textContent = 'Movie not found';//Movie is not within the database
    }
}
