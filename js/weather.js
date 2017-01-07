function getWeather(callback) {
	$.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?') 
	.done (function(location){
		$('#cityName').html(location.city);
		var cityUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + location.city + "&APPID=2d96aa2f11bb940f0d22bd7dc64e3684";
		$.ajax({
			dataType: "jsonp",
			url: cityUrl,
			success: callback
		})
	});
}

getWeather(function(data) {
	var city = data.name;
	var temperature = data.main.temp * (9/5) - 459.67;
	temperature = temperature.toFixed(2);
	var conditionDescription = data.weather[0].description;
	var conditionIcon = data.weather[0].icon;
	var iconUrl = "http://openweathermap.org/img/w/" + conditionIcon + ".png";

	//Update webpage
	//document.getElementById("cityName").innerHTML = city;
	document.getElementById("temp").innerHTML = "Temperature: "+temperature+ " F";
	document.getElementById("condition").innerHTML = conditionDescription;
	$("#icon").html("<img src='" + iconUrl + "'>");
})

function convertTemperature() {
	var temp = document.getElementById("temp").innerHTML.split(" ")[1];
	var units = document.getElementById("temp").innerHTML.split(" ")[2];
	if(document.getElementById("tempFarenheit").checked && units == "C") {
		temp = temp * (9/5) + 32;
		temp = temp.toFixed(2);
		document.getElementById("temp").innerHTML = "Temperature: "+temp+ " F";
	}
	else if(document.getElementById("tempCelcius").checked && units == "F"){
		temp = (temp - 32) * (5/9);
		temp = temp.toFixed(2);
		document.getElementById("temp").innerHTML = "Temperature: "+temp+ " C";
	}
}
