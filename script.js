const apiUrlToday = "https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=d4fbb78046f8d1022d9982c8b231ed15&units=metric&q=";
const apiUrlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=d4fbb78046f8d1022d9982c8b231ed15&units=metric&q=";

const searchBar = document.querySelector(".form input");
const searchBtn = document.querySelector(".form button");
const weatherIcon = document.querySelector(".weather-icon");


async function getWeather(city) {
    const response = await fetch(apiUrlToday + city);
    let data = await response.json()
    console.log(data) //checking the function correctly processes the api call
 
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
    if(data.weather[0].main === "clouds") {
        weatherIcon.src = "/images/rain.jpg";
    }

    else if(data.weather[0].main === "clear") {
        weatherIcon.src = "/images/sun.jpg";
    }

    else if(data.weather[0].main === "storm") {
        weatherIcon.src = "/images/storm.jpg";
    }


}

async function getForecast(city) {
    const request = await fetch(apiUrlForecast + city);
   .then(response => response.json())
   .then(data => {
    for(i=0;i<5;i++){
        document.querySelector".day-forecast".innerHTML(i+1);
    }
   })
    console.log(forecast)
}

searchBtn.addEventListener("click", ()=>{
    getWeather(searchBar.value); //calling function on mouse click of searchbox
    getForecast(searchBar.value);
    })



    

 // function which creates the api call and retrieves data