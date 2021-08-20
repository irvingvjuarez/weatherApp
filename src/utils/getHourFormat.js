const getHourFormat = (dt) => {
    let result = new Date(dt * 1000).toLocaleTimeString("en-US", { hour: '2-digit'})
    return result
}

export default getHourFormat