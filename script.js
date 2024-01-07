const apiUrlToday = "https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=d4fbb78046f8d1022d9982c8b231ed15&units=metric&q=";
const apiUrlForecast = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&exclude=hourly&appid=d4fbb78046f8d1022d9982c8b231ed15&units=metric&q=";

const searchBar = document.querySelector(".search-section input");
const searchBtn = document.querySelector(".search-section button");
const weatherIcon = document.querySelector(".weather-icon");
const forecasttemp = document.querySelector('temp-info');
const todaysDate = document.querySelector(".today");

todaysDate.innerHTML = new Date().toLocaleDateString("en-UK");

async function getWeather(city) {
    const response = await fetch(apiUrlToday + city);
    let data = await response.json()
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
  console.log(data)

}

 function getForecast(city) {
    fetch(apiUrlForecast + city)
    .then(response => response.json())
    .then(data =>{
        for(i=0;i<5;i++){
            const dayData = data.list[i];
            document.querySelector(".day"+i).innerHTML= 'temp ' + Math.round(Number(dayData.main.temp)) + "°C";
        }
    })
}

searchBtn.addEventListener("click", ()=>{
    getWeather(searchBar.value); //calling function on mouse click of searchbox
    getForecast(searchBar.value)
    })



    

 // function which creates the api call and retrieves data