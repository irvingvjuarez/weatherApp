const getLocation = () => {
    let location = navigator.geolocation.watchPosition(position => {
        console.log(position)
    })
}

export default getLocation