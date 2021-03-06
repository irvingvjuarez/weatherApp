import { WEATHER_ONE_CALL_API } from "../globals";
let firstData

export const newRequestData = async (API, component) => {
  component.setState({
    loading: true
  })

  fetch(API)
    .then(res => res.json())
    .then(data => {
      firstData = {...data}
      const { lon, lat } = firstData.coord
      const latestAPI = WEATHER_ONE_CALL_API.replace("LAT", lat).replace("LON", lon)
      return fetch(latestAPI)
    })
    .then(finalRes => finalRes.json())
    .then(finalData => {
      component.setState({
        loading: false,
        error: false,
        data: {
          ...firstData,
          ...finalData
        }
      })
    })
    .catch(error => {
      component.setState({
        loading: false,
        error: true
      })
    })
};
