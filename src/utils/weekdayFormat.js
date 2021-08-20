const weekdayFormat = (unix_utc_format) => {
    let weekDay = new Date(unix_utc_format * 1000).toLocaleDateString("en-US", { weekday: 'short' })
    return weekDay
}

export default weekdayFormat