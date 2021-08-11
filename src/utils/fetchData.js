const getData = async(lat, lon, component) => {
    try{
        let weatherApi = process.env.WeatherAPI.replace("LAT", lat)
        weatherApi = weatherApi.replace("LON", lon)
        let response = await fetch(weatherApi)
        let data = await response.json()
        component.setState({
            data: data
        })
    }catch(error){
        console.log(`Fetch error: ${error}`)
    }
}

const fetchData = (component) => {
    let location = navigator.geolocation.getCurrentPosition(position => {
        let lon = position.coords.longitude
        let lat = position.coords.latitude
    
        getData(lat, lon, component)
    })
}

export default fetchData