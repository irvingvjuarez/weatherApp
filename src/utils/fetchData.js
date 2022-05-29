import { API_BY_COORD, WEATHER_ONE_CALL_API } from "../globals";
import { getApiRequest } from "./getApiRequest";
import { newRequestData } from "./newRequestData"

const fetchData = async (component, name) => {
  component.setState({
    loading: true,
    error: null,
  });

  const locationCoord = localStorage.getItem("locationCoord")

  if(locationCoord){
    const { longitude, latitude } = JSON.parse(locationCoord)
    const APIs = [
      API_BY_COORD.replace("LAT", latitude).replace("LON", longitude),
      WEATHER_ONE_CALL_API.replace("LAT", latitude).replace("LON", longitude)
    ]

    Promise.all(APIs.map(api => fetch(api)))
      .then(results => Promise.all(results.map(res => res.json())))
      .then(datas => {
        let locationData = {}
        datas.forEach(data => {
          locationData = {
            ...locationData,
            ...data
          }
        })
        component.setState({
          loading: false,
          data: {...locationData}
        })
      })
      .catch(() => {
        component.setState({
          loading: false,
          error: true
        })
      })
  }else{
    window.navigator.geolocation.getCurrentPosition(position => {
      const { longitude, latitude } = position.coords;
      const coordinates = JSON.stringify({longitude, latitude})
      localStorage.setItem("locationCoord", coordinates)
      fetchData(component, name)
    }, () => {
      const API = getApiRequest(name);
      newRequestData(API, component)
    });
  }

};

export default fetchData;
