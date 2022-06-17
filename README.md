<img src="https://raw.githubusercontent.com/irvingvjuarez/weatherApp/development/src/assets/icons/favicon.png" width="160" />

# weatherApp
Web app to know the weather in real time 🌧 all around the world 🌏

# Get Started

1. Fork the repo
2. Clone it in your local machine
3. Install the necessary dependencies
4. Get the needed API keys.

The project uses several APIs to fetch different kind of data. You will need these:
- **WeatherAPIKey** (to fetch weather info). Get your Weather API Key here: https://openweathermap.org/api
- **MapboxAPIKey** (to use interactive map). Get the MapboxAPIKey from this URL https://www.mapbox.com/
- **CitiesApiApplicationID** & **CitiesApiKey** (to fetch name of cities). You can get them here: https://www.back4app.com/database/back4app/list-of-all-continents-countries-cities/get-started

You need to use these keys as env variables and store them in a `.env` file. There is a `.env.example` file for more info. <br>
Add these env variables in your deploy provider (netlify, vercel, etc) <br>

5. `npm run start` to run in a dev environment. <br>
You count with the following commands
- npm run start: Run the app in a dev environment
- npm run build: Create the bundle for production
- npm run preview: Let you preview the app as it would look like in production but in local. This is to try PWA features

# Watch it alive 🌏🌧️

[The Weather App](https://irvingjuarezweatherapp.netlify.app/)
