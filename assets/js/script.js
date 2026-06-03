// https://api.weatherapi.com/v1/current.json?key=5e3867ebcc5a42f186684851263105&q=${city}

let cityInput = document.getElementById("cityInput");

cityInput.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        getWeather();
    }
});

async function getWeather() {

    let city = cityInput.value;

    if (city === "") {
        alert("Please enter city");
        return;
    }

    let url = ` https://api.weatherapi.com/v1/current.json?key=5e3867ebcc5a42f186684851263105&q=${city}`;

    try {
        let response = await fetch(url);

        let data = await response.json();

        document.getElementById("weatherResult").innerHTML = `
        <h1>${data.location.name}</h1>
        <h2>${data.current.temp_c}</h2>
         <p>${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}">
    `;
        cityInput.value = "";
    }
    catch(error) {
        console.log(error);
    }
} 

