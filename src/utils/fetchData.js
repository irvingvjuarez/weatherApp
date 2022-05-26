import { getApiRequest } from "./getApiRequest";
import { newRequestData } from "./newRequestData"

const fetchData = async (component, name) => {
  component.setState({
    loading: true,
    error: null,
  });

  const locationCoord = localStorage.getItem("locationCoord")

  if(locationCoord){
    console.log("location coordinates:", locationCoord)
  }else{
    window.navigator.geolocation.getCurrentPosition(position => {
      const { longitude, latitude } = position.coords;
      const coordinates = JSON.stringify({longitude, latitude})
      localStorage.setItem("locationCoord", coordinates)
    }, () => console.log("No position gotten"));
  }

  /** Here we are assumming the name will be always there */
  const API = getApiRequest(name);
  newRequestData(API, component)

};

export default fetchData;
