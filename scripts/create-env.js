const fs = require("fs")

fs.writeFileSync("./.env", `WeatherAPICoor=${process.env.WeatherAPICoor}\nWeatherAPIName=${process.env.WeatherAPIName}\nMapTileAPI=${process.env.MapTileAPI}\nWeatherOneCallAPI=${process.env.WeatherOneCallAPI}`)