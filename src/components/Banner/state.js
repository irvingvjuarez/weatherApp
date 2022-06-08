import { getCurrentLocation } from "./services/getCurrentLocation"

export const initialState = (component) => ({
  message: "Get the weather of my current location",
  buttonTitle: "GET NOW",
  doneTitle: "",
  buttonAction: () => {
    /**Method to ask for the geolocation and get current location weather info */
    getCurrentLocation(component)
  }
})

export const secondaryState = (bannerState, component, setBannerState) => ({
  ...bannerState,
  message: "Set this location as the default one",
  buttonTitle: "SET NOW",
  buttonAction: () => {
    /**Here the local storage for the current location is settled */
    const { data: { name, coord } } = component.state
    const currentLocation = {
      name,
      lon: coord.lon,
      lat: coord.lat
    }

    localStorage.setItem("currentLocation", JSON.stringify(currentLocation))
    setBannerState({
      ...bannerState,
      doneTitle: "Done!"
    })
  }
})
