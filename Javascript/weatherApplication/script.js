resultElmt = document.querySelector('#result')
cityNameElmt = document.querySelector('#cityName')


async function fetchWeather(city){
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ca018df54353f065aaed7d802825b8be`)
        .then((responce)=>responce.json())
        .then((data)=>displayWeather(data))
        .catch((err)=>console.log(err))
}

function displayWeather(data){
    console.log(data)
    resultElmt.innerHTML = `  
                        <h1>${data.name}<span class='ps-4'>${data.sys.country}</span></h1>
                        <p><span>${data.weather[0].main}</span>:<span>${data.weather[0].description}</span></p>
                        <img src='https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt='${data.weather[0].description}'>
    `

}

async function handleSubmit(){
    // e.preventDefault();
    console.log("*************")
    city = cityNameElmt.value
    await fetchWeather(city)
}


// fetchWeather();