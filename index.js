const apiKey = "66f40733770948784546b5a48e731293";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Amritsar&appid=&units=metric";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    alert("hello");
    console.log(`Data is  : ${data}`);    
}

checkWeather();