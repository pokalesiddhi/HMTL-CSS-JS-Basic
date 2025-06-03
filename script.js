const apiKey="99a4e5722e9bf24a531f10808fb29c3b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response=await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/weather.png";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png"
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/Rain.png"
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/clear.png"
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/Mist.png"
    }
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
