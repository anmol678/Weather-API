var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
	.option('location', {
			demand: false,
			type: 'string',
			alias: 'l',
			describe: 'The location for which weather is to be fetched'
	})
	.help('help')
	.argv;

if (typeof argv.l === 'string' && argv.l.length > 0) {
	weather(argv.l).then(function (currentWeather) {
		console.log(currentWeather);
	}, function (error) {
		console.log(error);
	});
}
else {
	location().then(function (location) {
		return weather(location.city);
	}).then(function (currentWeather) {
		console.log(currentWeather);
	}).catch (function (error) {
		console.log(error);
	});
}


