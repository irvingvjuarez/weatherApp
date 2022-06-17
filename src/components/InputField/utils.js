import { CITIES_API } from "../../globals";
import fetchData from "../../utils/fetchData"

const citiesRequestConfig = {
  headers: {
    'X-Parse-Application-Id': process.env.CitiesApiApplicationID,
    'X-Parse-REST-API-Key': process.env.CitiesApiKey
  }
}

const getWhere = (request) => {
  return encodeURIComponent(JSON.stringify({
    "name": {
      "$regex": request,
      "$options": "i"
    }
  }));
}

export const enterListener = (e, component) => {
  if(e.keyCode === 13){
    e.target.value = ""
    e.target.blur()
    fetchData(component, e.target.value)
  }
}

export const fetchCities = (input, setSearchOptions) => {
  const { value } = input.target
  const where = getWhere(value)
  const api = CITIES_API.replace("{where}", where)

  fetch(api, citiesRequestConfig)
    .then(res => res.json())
    .then(data => setSearchOptions(data.results))
    .catch(err => console.log("There has been an error: ", err.message))
}
