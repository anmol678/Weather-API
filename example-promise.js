// function doWork (data, callback) {
// 	callback('done');
// }

// function doWorkPromise (data) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			resolve('everything went well');
// 		}, 1000);
// 		// reject({
// 		// 	error: 'something bad happened'
// 		// });
// 	});
// }

// doWorkPromise('some data').then(function (data) {
// 	console.log(data);
// }, function (error) {
// 	console.log(error);
// })

var request = require('request');

function getWeather (location) {
	return new Promise(function (resolve, reject) {
		if (!location)
			reject('No location provided');
		else {
			var encodedLocation = encodeURIComponent(location);
			var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&appid=564db84956bc235e7a10df17f3ded124&units=metric';
			request({
				url: url, 
				json: true
			}, function (error, response, body) {
				if (error || typeof body.main === 'undefined')
					reject('Unable to fetch weather.');
				else {
					//console.log(JSON.stringify(body, null, 4));
					resolve('It\'s ' + body.main.temp + '˚C in ' + body.name);
				}
			});
		}
	});
}

getWeather('new york').then(function (currentWeather) {
	console.log(currentWeather);
}, function (error) {
	console.log(error);
});