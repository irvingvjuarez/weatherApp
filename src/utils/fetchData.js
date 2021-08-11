const getData = async(API, component) => {

    try{
        let response = await fetch(API)
        let data = await response.json()

        if(!component){
            return await data
        }
        
        component.setState({
            loading: false,
            data: data
        })
    }catch(error){
        component.setState({
            loading: false,
            error: error
        })
    }
}

const getApi = (name) => {
    let regex = /\s/
    name = name.replace(regex, "%20")
    let API = process.env.WeatherAPIName.replace("NAME", name)

    return API
}

const requestData = (lat, lon, component, name) => {
    let API

    if(name){
        API = getApi(name)
    }else{
        API = process.env.WeatherAPICoor.replace("LAT", lat)
        API = API.replace("LON", lon)
    }

    getData(API, component)
}

const fetchData = async (component, name) => {

    if(name){
        let API = getApi(name)
        let data = await getData(API)
        requestData(data.coord.lat, data.coord.lon, component)
    }else{
        let location = navigator.geolocation.getCurrentPosition(position => {
            let lon = position.coords.longitude
            let lat = position.coords.latitude
        
            requestData(lat, lon, component)
        })
    }


}

export default fetchData