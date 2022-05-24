import { API_BY_CITY_NAME } from "../globals"

export const getApiRequest = (name) => API_BY_CITY_NAME.replace('NAME', decodeURI(name));
