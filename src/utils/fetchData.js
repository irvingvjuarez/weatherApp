import { getApiRequest } from "./getApiRequest";
import { newRequestData } from "./newRequestData"

const fetchData = async (component, name) => {
  component.setState({
    loading: true,
    error: null,
  });

  /** Here we are assumming the name will be always there */
  const API = getApiRequest(name);
  newRequestData(API, component)

  /**Code I will use later on, because the geolocation feature is going to be added lately */
  // window.navigator.geolocation.getCurrentPosition((position) => {
  //   const lon = position.coords.longitude;
  //   const lat = position.coords.latitude;

  //   requestData(lat, lon, component);
  // }, (positionError) => {
  //   fetchData(component, 'Mexico City');
  // });
};

export default fetchData;
