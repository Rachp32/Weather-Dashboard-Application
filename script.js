const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid=d4fbb78046f8d1022d9982c8b231ed15&units=metric"
const searchBar = document.querySelector(".form input");
const searchBtn = document.querySelector(".form button");
const weatherIcon = document.querySelector(".weather-icon")


async function getWeather(city) {
    const response = await fetch(apiUrl + city);
    let data = await response.json()
    console.log(data) //checking the function correctly processes the api call
 
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchBtn.addEventListener("click", ()=>{
    getWeather(searchBar.value) //calling function on mouse click of searchbox
    })



    

 // function which creates the api call and retrieves data