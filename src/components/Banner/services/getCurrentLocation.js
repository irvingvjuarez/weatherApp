import { API_BY_COORD, WEATHER_ONE_CALL_API } from "../../../globals";

export const getCurrentLocation = (component) => {
  navigator.permissions.query({name: 'geolocation'})
    .then(function(PermissionStatus) {
      if(PermissionStatus.state !== 'granted') {
        window.navigator.geolocation.getCurrentPosition(position => {
          component.setState({
            loading: true
          })
          const { longitude, latitude } = position.coords;

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
        });
      }
    })
}
