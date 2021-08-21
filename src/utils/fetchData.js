const getOneCallAPI = (data) => {
    let lon = data.coord.lon
    let lat = data.coord.lat
    let oneCallAPI = process.env.WeatherOneCallAPI.replace("LAT", lat)
    oneCallAPI = oneCallAPI.replace("LON", lon)

    return oneCallAPI
}

const getData = async(API, component, flag) => {

    try{
        let response = await fetch(API)
        let data = await response.json()

        let newAPI = getOneCallAPI(data)
        let newResponse = await fetch(newAPI)
        let newData = await newResponse.json()
        let superData = {
            ...data,
            ...newData
        }
        
        // console.log(superData)

        if(!flag){
            return await superData
        }
        
        component.setState({
            loading: false,
            data: superData
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

    getData(API, component, true)
}

const fetchData = async (component, name) => {
    component.setState({
        loading: true,
        error: null
    })

    if(name){
        let API = getApi(name)
        let data = await getData(API, component)
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