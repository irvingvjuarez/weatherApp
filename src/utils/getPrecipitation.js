const getPrecipitation = (decimalNum) => {
    let percentage = Math.round(decimalNum * 100)
    let result = `${percentage}%`
    return result
}

export default getPrecipitation