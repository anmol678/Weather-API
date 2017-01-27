// function doWork (shouldFail) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout(function () {
// 			if (typeof shouldFail === 'boolean' && shouldFail === true)
// 				reject('error message');
// 			else
// 				resolve('success');
// 		}, 1000);
// 	});
// }

// doWork(true).then(function (message) {
// 	console.log(message);
// 	return doWork(true);
// }).then(function (message) {
// 	console.log(message);
// }).catch(function (error) {
// 	console.log(error);
// });

function getLocation () {
	return new Promise(function (resolve, reject) {
		resolve('Meerut');
		reject('no location');
	});
}

function getWeather (location) {
	return new Promise(function (resolve, reject) {
		resolve('it is bla in ' + location);
		if (!location)
			reject('no location so no weather');
	});
}

getLocation().then(function (location) {
	return getWeather(location);
}).then(function (currentWeather) {
	console.log(currentWeather);
}).catch (function (error) {
	console.log(error);
});