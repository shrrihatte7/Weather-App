let input = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherImg = document.querySelector(".weather img");
let degree = document.querySelector(".degree");
let city = document.querySelector(".city");
let humPercent = document.querySelector(".humpercent");
let windspeed = document.querySelector(".windspeed");


const apiKey = "6d131775de0fd2db08b5a4c8c84a6e7c";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const weatherdata = async(urlCity)=>{
    const response = await fetch(apiUrl + urlCity + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error-message").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }
    else{
        const data = await response.json();
    console.log(data);

    const details = document.querySelector(".weather");
    details.style.display = "block";
    document.querySelector(".error-message").style.display = "none";
    city.innerHTML = data.name;
    degree.innerHTML = Math.round(data.main.temp) + "<sup>o</sup>C";
    humPercent.innerHTML = data.main.humidity + "%";
    windspeed.innerHTML = Math.round(data.wind.speed) + "km/h";

        if(data.weather[0].main == "Clear"){
            weatherImg.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Cloud"){
            weatherImg.src = "images/cloud.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherImg.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherImg.src = "images/mist.png"
        }
        else if(data.weather[0].main == "Rain"){
            weatherImg.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Snow"){
            weatherImg.src = "images/snow.png"
        }
        else{
            weatherImg.src = "images/cloud.png"
        }
    }
    
    
};
const clearFields = ()=>{
    input.value = " ";
}
searchBtn.addEventListener("click",()=>{
    const searchBtnVal = input.value;
    weatherdata(searchBtnVal);
    clearFields();
})

