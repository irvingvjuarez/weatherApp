const dateFormat = (timezone) => {
    let d, localTime, localOffset, utc, city, newDate

    d = new Date()
    localTime = d.getTime()
    localOffset = d.getTimezoneOffset() * 60000
    utc = localTime + localOffset
    city = utc + (1000 * timezone)
    newDate = new Date(city)

    return newDate
}

export default dateFormat