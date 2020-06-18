var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Add city
        var addCity = document.createTextNode(apiResult.name);
        document.getElementById('city').appendChild(addCity);

        //Add weather description
        var addWeather = document.createTextNode(apiResult.weather[0].description);
        document.getElementById('weather').appendChild(addWeather);
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=32246,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();