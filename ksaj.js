const url = 'https://streaming-availability.p.rapidapi.com/search/filters?services=netflix&country=us&output_language=en&order_by=original_title&genres_relation=and&show_type=all';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9e3f505f99mshc93b695fa43778dp18cc75jsn3a50162f5f9d',
		'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
	}
};

// try {
// 	const response =  fetch(url, options);
// 	const result = response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
async function getData() {
    try {
            const response = fetch(url, options);
            const result = await response.text();
            console.log(result)

    } catch(error) {
        console.error(error)
    }
}
getData()