export const geoApiOptions = {

    method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bf13816b3emshc5efb31a8e9cd13p1370f9jsn4a84e99fdf83',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};


try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}