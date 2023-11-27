
let weather = {
    'appKey': '60ec99262cc71b9f2e19b837ed5a07e8',
    fetchWeather: function (city) {
        fetch (
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid=" 
            + this.appKey
        )
            .then((response) => response.json())
            .then((data => this.displayWeather(data) ));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { temp_max, temp_min, temp, humidity } = data.main;
        const { main, description, icon } = data.weather[0];
        console.log(name, temp_max, temp_min, temp, main, description)

        document.querySelector('.city').innerText = "Weather in " + name;
        document.querySelector('.description').innerText = description;
        document.querySelector('.icon').src = "https://openweathermap.org/themes/openweathermap/assets/img/landing/"+ icon +".png"
        document.querySelector('.temp').innerText = "The current temp is " + temp + '°F';
        document.querySelector('.temp_max').innerText = "H: " + temp_max + '°F';
        document.querySelector('.temp_min').innerText = "L: " + temp_min + '°F';
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%" ;


    }, 
    search: function () {
        this.fetchWeather(document.querySelector('.search-bar').value);
    },
};

document.querySelector('button')
.addEventListener('click', function () {
    weather.search();
    

})