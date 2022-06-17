const apiKey = process.env.WeatherAPIKey

export const API_BY_CITY_NAME = "https://api.openweathermap.org/data/2.5/weather?q=NAME&units=metric&appid=" + apiKey
export const API_BY_COORD = "https://api.openweathermap.org/data/2.5/weather?lat=LAT&lon=LON&units=metric&appid=" + apiKey
export const WEATHER_ONE_CALL_API = "https://api.openweathermap.org/data/2.5/onecall?lat=LAT&lon=LON&units=metric&appid=" + apiKey
export const CITIES_API = "https://parseapi.back4app.com/classes/Continentscountriescities_City?limit=10&where={where}&keys=name,cityId"

import mx from "./assets/images/mx.jpg"
import bogota from "./assets/images/bogota.jpg"
import buenosaires from "./assets/images/buenosaires.jpg"
import london from "./assets/images/london.jpg"
import paris from "./assets/images/paris.jpg"
import washington from "./assets/images/washington.jpg"
import madrid from "./assets/images/madrid.jpg"
import venice from "./assets/images/venice.jpg"
import lima from "./assets/images/lima.jpg"

export const RANDOM_CITIES = [
  {
    id: 1,
    name: "Mexico City",
    image: mx
  },
  {
    id: 2,
    name: "Bogota",
    image: bogota
  },
  {
    id: 3,
    name: "Buenos Aires",
    image: buenosaires
  },
  {
    id: 4,
    name: "London",
    image: london
  },
  {
    id: 5,
    name: "Paris",
    image: paris
  },
  {
    id: 6,
    name: "Washington",
    image: washington
  },
  {
    id: 7,
    name: "Madrid",
    image: madrid
  },
  {
    id: 8,
    name: "Venice",
    image: venice
  },
  {
    id: 9,
    name: "Lima",
    image: lima
  }
]
