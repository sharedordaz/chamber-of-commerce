const choosenURL2 = "https://api.openweathermap.org/data/2.5/weather?id=3529612&appid=3e5fc40d3932e762ff13a8c9ee95bbb8";

let image2 = document.querySelector('.weather-image_small'); 
let weather2 = document.querySelector('.weather_small');
let currently2 = document.querySelector('.currently_small');
let high2 = document.querySelector('.high_small');
let windchill2 = document.querySelector('.wind-chill_small');
let windspeed2 = document.querySelector('.wind-speed_small');
let humidity2 = document.querySelector('.humidity_small');


fetch(choosenURL2)
    .then((response) => response.json())
    
    .then((jsObject) => {

    //console.table(jsObject);
           
    let imgicon = jsObject.weather[0].icon;
    //console.log(image);
    image.setAttribute('src', "https://openweathermap.org/img/w/" + imgicon +'.png');
    
    weather2.textContent =jsObject.weather[0].description;
    currently2.textContent = jsObject.main.temp + " °F";
    high2.textContent = jsObject.main.temp_max + " °F";
    windchill2.textContent = jsObject.wind.deg + " °F";
    windspeed2.textContent = jsObject.wind.speed;
    humidity2.textContent = jsObject.main.humidity;
    });
