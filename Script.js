const apiKey = "9b8cd86c8db2d8e575c4681d69a3239f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const date = document.querySelector(".date");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        } else {

            var data = await response.json();
        
        
        
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr ";
            let now = new Date();
            date.innerHTML = dateBuilder(now);
        
        
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "Images/clouds.png"; 
            }
            else if (data.weather[0].main == "Clear"){
                weatherIcon.src = "Images/clear.png";
            }
            else if (data.weather[0].main == "Rain"){
                weatherIcon.src = "Images/rain.png";
            }
            else if (data.weather[0].main == "Drizzle"){
                weatherIcon.src = "Images/drizzle.png";
            }
            else if (data.weather[0].main == "Mist"){
                weatherIcon.src = "Images/mist.png";
            }
            else if (data.weather[0].main == "Snow"){
                weatherIcon.src = "Images/snow.png";
            }
        
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            document.querySelector(".footer").style.display = "block";
        }


    
}


function dateBuilder(d) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
  


searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})


