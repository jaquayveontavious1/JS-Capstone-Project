//SIDEBAR
let mainMenu = document.getElementById("menu")
let sideBar = document.querySelector(".sidebar")
let closeCart = document.getElementById("closeCart")
//opening sidebar
mainMenu.onclick = function () {
    sideBar.classList.add("active")
};
closeCart.onclick = () => {
    sideBar.classList.remove("active")
};




//Search Function

// let searchButton = document.getElementById("searchButton");
// let searchResult = document.querySelector(".search-result");
// let form = document.querySelector(".middle-content")



// searchButton.addEventListener("click", () => {
//     let query = form.querySelector('input').value;
//     console.log(query)

//     getResults(query)

// })

// async function getResults (query) {
//    let request = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
//    let movies = await request.json()

//    makeImages(movies)
 


   
// }
// function makeImages(movies) {
//     for(let movie of movies) {
        
//         let src = movie.show.image.medium;
//         const img = document.createElement("img");
//         img.src = src;
//         searchResult.appendChild(img);
//     }
// }
// Function to fetch movie data from OMDB API
async function fetchMovieData(apiKey, movieTitle) {
    const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(movieTitle)}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const movieData = await response.json();
        return movieData;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        return null;
    }
}

// Replace 'your_api_key_here' with your actual OMDB API key
const apiKey = `23ff2b52`;

// List of movie titles to test
const movieTitles = ['Inception', 'The Dark Knight', 'Interstellar'];

// Fetch data for each movie title
Promise.all(movieTitles.map(title => fetchMovieData(apiKey, title)))
    .then(movieDataArray => {
        movieDataArray.forEach((movieData, index) => {
            if (movieData) {
                console.log(`Movie ${index + 1}:`);
                console.log('Title:', movieData.Title);
                console.log('Plot:', movieData.Plot);
                console.log('-----------------------------');
            }
        });
    });


//image information
// const imageInfo = document.querySelector(".image-info");


const imageInfo = {
    Image1:{
        title: "Image 1 Title",
        description: "Description for Image 1",
        author: "Author 1"
    }
}

    
        
        
        
        
    

    function displayImageInfo(imageId) {
        const imageInfoDiv = document.getElementById('imageInfo');
        const info = imageInfo[imageId];
        if (info) {
            imageInfoDiv.innerHTML = `<h1>${info.title}</h1><p>Description: ${info.description}</p><p>Genre: ${info.author}</p>`;
        } else {
            imageInfoDiv.textContent = 'Information not available.';
        }
    }

const galleryImage = document.querySelector(".movie-image");
galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        const imageId = this.dataset.info;
        displayImageInfo(imageId);
    });
});