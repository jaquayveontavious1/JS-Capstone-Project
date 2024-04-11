// let searchButton = document.getElementById("searchButton");
// let form = document.querySelector(".main-content");
// let searchResult = document.querySelector("search-result");

// searchButton.addEventListener("click", () => {
//     let query = form.querySelector('input').value;
//     console.log(query)
//     getMovies(query)
// })
//  async function getMovies(query) {
//     let request = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
//     let movies = await request.json();
//     makeImages(movies)
// }
// function makeImages(movies) {
//     for(let movie of movies) {
//         let src = movie.show.image;
//         const img = document.createElement("img");
//         img.src = src;
//        document.querySelector(".img") = img;
//     }
// }
// api_key =  44b150f3;
//url = http://www.omdbapi.com/?i=tt3896198&apikey=44b150f3;
// const key = `44b150f3`
// const searchInput = document.getElementById("search");
// const searchButton = document.getElementById("searchButton");
// const displayMovieList = document.querySelector("search-result");

// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=44b150f3;')
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })
//  let api_key = b193ee7e837884b9cf49a11fc0a6770d;
// const key = `23ff2b52`;
// let searchButton = document.getElementById("searchButton");
// let searchInput = document.getElementById("search");
// let result = document.querySelector(".search-result");

// let getMovie = () => {
//     let movieName = searchInput.value;
//     let url = `http://www.omdbapi.com/?i=tt1630029&apikey=23ff2b52`;
//     if(movieName <= 0) {
//         result.innerHTML = `<h3 class = "message">Please Enter A Movie Name`
//     } else {
//         fetch(url)
//         .then((response) => response.json())
//             .then((data) => { 
//                   console.log(data);
//             console.log(data.Poster);
            // console.log(data.Title);
            // console.log(data.Runtime);
            // console.log(data.Plot);
            // console.log(data.imdbRating);
            // console.log(data.Actors);
            // console.log(data.Genre);
            // console.log(data.Year);
            // console.log(data.Director);
            // })

//             if(data.response == 'True') {
//                 result.innerHTML = `
//                 <div class = "movie-info">
//                     <img src = ${data.Poster} class = "poster" width ="200" height = "250">
//                     <div> 
//                       <h2 id = "title">${data.Title}</h2>
//                     </div>
            
//                     <div class = "details">
//                         <span id = "runtime">${data.Runtime}</span>
//                         <br>
//                         <span id = "year">${data.Year}</span>
//                     </div>
//                     <div class = "genre">
//                         <div>${data.Genre.split(",").join("</div><div>")}</div>
//                     </div>
//                     <div class = "Plot">
//                         <h3>Plot :</h3>
//                         <p> ${data.Plot}</p>
//                     </div>
//                     <div class = "actors">
//                         <h3 id = "cast">Cast :</h3>
//                         <p id = "namesofActors">${data.Actors}</p>
//                     </div>
        
//                 </div>
//                 `
            
        
         
            
//             // console.log(data);
//             // console.log(data.Poster);
//             // console.log(data.Title);
//             // console.log(data.Runtime);
//             // console.log(data.Plot);
//             // console.log(data.imdbRating);
//             // console.log(data.Actors);
//             // console.log(data.Genre);
//             // console.log(data.Year);
//             // console.log(data.Director);
           
         
    
    
    

// searchButton.addEventListener("click", getMovie);
// window.addEventListener("load", getMovie);



// fetch('http://www.omdbapi.com/?i=tt1630029&apikey=23ff2b52')
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })

// //upon keypress function findMovies is initiated 
// // searchInput.addEventListener('input', findMovies);

// async function singleMovie () {
//     const urlQueryParams = new new URLSearchParams(window.location.search);
//     let id = urlQueryParams.get('id');
//     console.log(id)
//     const url = `https://www.omdbapi.com/?i=${id}&apikey=${key}`
//     const response = await fetch(`${url}`)
//     const data = await response.json()
//     console.log(data);
//     console.log(url)



//     let output = `
//         <div class= "movie-poster">
//             img src = ${data.Poster} alt = 'Movie-Poster'>
//         </div
//         <div class = "movie-details">
//             <div class = "details-header">
//                 <div class = "dh-ls">
//                     <h2> ${data.Title}</h2>

// }

// let searchButton = document.getElementById("searchButton");
// let searchInput = document.getElementById("search");
// let results = document.querySelector(".search-result");

// let getMovie = () => {
//     let movieName = searchInput.value;
//     let url = `http://www.omdbapi.com/?i=tt1630029&apikey=23ff2b52`;
//     if(movieName <=0) {
//         results.innerHTML = `<h3 class = "message">Please Enter A Movie Name </h3>`
//     } else {
//         fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data)
// //             if(data.response == "True") {
// //                 results.innerHTML = `
// //                 <div class = "movie-info">
// //                     <img src = ${data.Poster} class = "poster" width = "200" height = "250">
// //                     <div>
// //                     <h2 id = "title">${data.Title}</h2>
// //                     </div>
// //                     <div class = "details">
// //                         <span id = "runtime">${data.Runtime}</span>
// //                         <span id = "year">${data.Year}</span>
                        
// //                     </div>
// //                     <div class = "genre">
// //                         <div>${data.Genre.split(",").join("</div><div>")}</div>
// //                     </div>
// //                     <div class = "Plot">
// //                         <h3> Plot : </h3>
// //                         <p> ${data.Plot}</p>
// //                     </div>
// //                     <div class = "actors">
// //                         <h3 id = "cast"> Cast: </h3>
// //                         <p id = "namesofActors">${data.Actors}</p>
// //                     </div>
// //                 </div>
// //                 `
// //             }
//         })
//     }
// }
// // searchButton.addEventListener("click", getMovie);
// window.addEventListener("load", getMovie);

//Initial References
let movieNameRef = document.getElementById("search");
let searchButton = document.getElementById("searchButton");
let result = document.querySelector(".search-result");
let key = `23ff2b52`
//Function to fetch data from an API

let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?i=${encodeURIComponent(movieInput)}8&apikey=${key}`;
   
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if(data.Response == "True") {
                result.innerHTML = `
             <div class = "movie-info">
                <img src = ${data.Poster} alt = "Poster" width= "200" height = "250">
                <div>
                    <h2 id = "title">${data.Title}</h2>
                </div>
                <div class = "details">
                    <span id = "runtime">${data.Runtime}</span>
                    <span id = "year">${data.Year}</span>
                </div>
                <div class = "genre">
                    <div>${data.Genre.split(",").join("</div><div>")}</div>
                </div>
                <div class = "Plot">
                    <h3> Plot : </h3>
                    <p> ${data.Plot}</p>
                </div>
                <div class = "actors">
                    <h3 id = "cast"> Cast : </h3>
                    <p id = "namesofActors">${data.Actors}</p>
                </div>
             </div>
            `
            } else{
                result.innerHTML = `<h3 class = "message">${data.Error}</h3>`
            }
           
            console.log(data);
            console.log(data.Poster);
            console.log(data.Title);
            console.log(data.Runtime);
            console.log(data.Actors);
            console.log(data.Rated);
            console.log(data.Plot);
            console.log(data.Genre);
            console.log(data.Year);
            
            
        })
        
            .catch(() => {
                result.innerHTML = `<h3 class = "message">`
            } )
    }
    
       
    
   
    
        


    window.addEventListener("load", getMovie);
    searchButton.addEventListener("click", getMovie);
