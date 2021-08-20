const getWeatherStatus = (rawDescription) => {
    let result

    switch (rawDescription) {
        case "Thunderstorm":
            result = "Thunderstorm"
        break;
        case "Drizzle":
            result = "Drizzling"
        break;
        case "Rain":
            result = "Raining"
        break;
        case "Snow":
            result = "Snowing"
        break;
        case "Mist":
            result = "Smoggy"
        break;
        case "Smoke":
            result = "Smoggy"
        break;
        case "Haze":
            result = "Smoggy"
        break;
        case "Dust":
            result = "Smoggy"
        break;
        case "Fog":
            result = "Foggy"
        break;
        case "Sand":
            result = "Sand"
        break;
        case "Ash":
            result = "Ash"
        break;
        case "Squall":
            result = "Showers"
        break;
        case "Tornado":
            result = "Tornado"
        break;
        case "Clear":
            result = "Clear Sky"
        break;
        case "Clouds":
            result = "Cloudy"
        break;
    }

    return result
}

export default getWeatherStatus