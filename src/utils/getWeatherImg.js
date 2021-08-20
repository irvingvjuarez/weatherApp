const getWeatherImg = (value) => {
    let result

    switch(value){
        case "Thunderstorm":
            result = "thunder"
        break;
        case "Drizzle":
            result = "slightlyCloudy"
        break;
        case "Rain":
            result = "rainy"
        break;
        case "Snow":
            result = "Snowy"
        break;
        case "Mist":
            result = "strange"
        break;
        case "Smoke":
            result = "strange"
        break;
        case "Haze":
            result = "strange"
        break;
        case "Dust":
            result = "strange"
        break;
        case "Fog":
            result = "strange"
        break;
        case "Sand":
            result = "strange"
        break;
        case "Ash":
            result = "strange"
        break;
        case "Squall":
            result = "rainy"
        break;
        case "Tornado":
            result = "strange"
        break;
        case "Clear":
            result = "sunny"
        break;
        case "Clouds":
            result = "cloudy"
        break;
    }

    return `../assets/icons/${result}.png`
}

export default getWeatherImg