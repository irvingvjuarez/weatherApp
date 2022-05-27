const apiKey = process.env.WeatherAPIKey

export const API_BY_CITY_NAME = "https://api.openweathermap.org/data/2.5/weather?q=NAME&units=metric&appid=" + apiKey
export const API_BY_COORD = "https://api.openweathermap.org/data/2.5/weather?lat=LAT&lon=LON&units=metric&appid=" + apiKey
export const WEATHER_ONE_CALL_API = "https://api.openweathermap.org/data/2.5/onecall?lat=LAT&lon=LON&units=metric&appid=" + apiKey

export const RANDOM_CITIES = [
  "Mexico City",
  "Bogota",
  "Buenos Aires",
  "London",
  "Paris",
  "Washington",
  "Madrid",
  "Venice"
]
