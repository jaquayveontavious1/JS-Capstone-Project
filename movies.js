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
//SlideShow
const previous = document.querySelector(".previous-navBtn");
const next = document.querySelector("next-navBtn");
const images = document.querySelector(".slider-carousel");
const totalImages = images.length;
let currentIndex = 0;
//Event listeners for previous and next buttons
previous.addEventListener("click", () => {
    previousImage();
});
next.addEventListener("click", () => {
    nextImage();
});

function nextImage() {
    images[currentIndex].classList.remove('main');
    if(currentIndex == totalImages-1){
        currentIndex = 0;
    }
    else {
        currentIndex++
    }
    images[currentIndex].classList.add('main');
}
function previousImage() {
    images[currentIndex].classList.remove("main");
    if(currentIndex == 0) {
        currentIndex = totalImages-1;
    } 
    else {
        currentIndex--
    }
    images[currentIndex].classList.add('main');
}

// const url = 'https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=game';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9e3f505f99mshc93b695fa43778dp18cc75jsn3a50162f5f9d',
// 		'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
// 	}
// };
// async function getData() {
//     try {
//         const response = await fetch(url,options);
//         const result = await response.json();
//         console.log(result)
     
//     } catch(error) {
//         console.error(error)
//     }
// }
getData()
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

