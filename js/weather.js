function getWeather(callback) {
	var cityUrl = "http://api.openweathermap.org/data/2.5/weather?q=Dayton&APPID=2d96aa2f11bb940f0d22bd7dc64e3684";
	$.ajax({
		dataType: "jsonp",
		url: cityUrl,
		success: callback
	});
}

getWeather(function(data) {
	console.log('weather data received');
	console.log(data.weather[0]);
	console.log(data.main.temp);
})