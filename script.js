const apiKey = "9a9425d92b3927afc9ff19f14a065da8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".searchbtn");

const whetherIcon = document.querySelector(".images img");

async function checkWhether(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humid").innerHTML = data.main.humidity + "%";
    document.querySelector(".windy").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        whetherIcon.src = "images/cloudy.png"
    } else if(data.weather[0].main == "Drizzle"){
        whetherIcon.src = "images/drizzle.png"
    } else if(data.weather[0].main == "Snow"){
        whetherIcon.src = "images/snow.png"
    } else if(data.weather[0].main == "Rain"){
        whetherIcon.src = "images/rain.png"
    } else if(data.weather[0].main == "Mist"){
        whetherIcon.src = "images/mist.png"
    } else if(data.weather[0].main == "Clear"){
        whetherIcon.src = "images/sun.png"
    }

    document.querySelector(".wheather").style.display = "flex";

}

searchBtn.addEventListener("click", () => {
    checkWhether(searchBox.value);
})

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWhether(searchBox.value);
    }
});

