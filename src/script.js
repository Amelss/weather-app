let weather = {
    apiKey: "61d8a1a95b85745ee4be7c5be05b31b3",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey
        )
          .then((response) => response.json())
          .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = name
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + "@2x.png"
        document.querySelector(".description").innerText = description
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
        document.querySelector(".wind").innerText = "Wind: " + speed + " mp/h"
        document.querySelector(".weather").classList.remove(".invisible")

    },
    
    search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value)
}
};



document.querySelector(".search button").addEventListener('click', function () {
    weather.search()
})

document.querySelector(".search-bar").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        weather.search()
    }
})

weather.fetchWeather("London")