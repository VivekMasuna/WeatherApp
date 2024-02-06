async function fetchData(city) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd98352d807mshffe782f33bbab57p13e90ajsnc98f93d470d2',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Parse response as JSON

        console.log(result);

        cityName.innerHTML = city
        // cloud_pct.innerHTML = result.cloud_pct
        temp.innerHTML = result.temp
        temp2.innerHTML = result.temp
        feels_like.innerHTML = result.feels_like
        humidity.innerHTML = result.humidity
        humidity2.innerHTML = result.humidity
        min_temp.innerHTML = result.min_temp
        max_temp.innerHTML = result.max_temp
        wind_speed.innerHTML = (result.wind_speed * 3.6).toFixed(2);
        wind_speed2.innerHTML = (result.wind_speed * 3.6).toFixed(2);
        wind_degrees.innerHTML = result.wind_degrees
        sunrise.innerHTML = new Date(result.sunrise * 1000).toLocaleTimeString();
        sunset.innerHTML = new Date(result.sunset * 1000).toLocaleTimeString();
    } catch (error) {
        console.error(error);
    }
}


submit.addEventListener("click", (e) => {
    e.preventDefault();
    fetchData(city.value);
});

fetchData("Mumbai");