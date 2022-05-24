
const getOneCallAPI = (data) => {
  const { lon, lat } = data.coord;
  let oneCallAPI = process.env.WeatherOneCallAPI.replace('LAT', lat);
  oneCallAPI = oneCallAPI.replace('LON', lon);

  return oneCallAPI;
};

const getData = async (API, component, flag) => {

  try {
    const response = await fetch(API);
    const data = await response.json();

    const newAPI = getOneCallAPI(data);

    const newResponse = await fetch(newAPI);
    const newData = await newResponse.json();

    const superData = {
      ...data,
      ...newData,
    };

    component.setState({
      loading: false,
      data: superData,
    });

  } catch (error) {

    component.setState({
      loading: false,
      error,
    });
  }
};

const getApi = (name) => {
  const regex = /\s/;
  name.replace(regex, '%20');
  const API = process.env.WeatherAPIName.replace('NAME', name);

  return API;
};

const requestData = (lat, lon, component, name) => {
  let API;

  if (name) {
    API = getApi(name);
  } else {
    API = process.env.WeatherAPICoor.replace('LAT', lat);
    API = API.replace('LON', lon);
  }

  getData(API, component, true);
};

const fetchData = async (component, name) => {
  component.setState({
    loading: true,
    error: null,
  });

  if (name) {
    const API = getApi(name);
    const data = await getData(API, component);

    requestData(data.coord.lat, data.coord.lon, component);
  } else {
    window.navigator.geolocation.getCurrentPosition((position) => {
      const lon = position.coords.longitude;
      const lat = position.coords.latitude;

      requestData(lat, lon, component);
    }, (positionError) => {
      fetchData(component, 'Mexico City');
    });
  }

};

export default fetchData;
