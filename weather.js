var request = require('request');

module.exports = function (location) {
	return new Promise(function (resolve , reject) {
		if (!location)
			reject('No location provided.');
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