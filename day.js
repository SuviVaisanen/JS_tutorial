// Returns day of the week for the given date.
function dayName(date) {
    const dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayOfTheWeek[date.getDay()];
}

// Returns a greeting for the given date
function greeting(date) {
    return `Hello, world! Happy ${dayName(date)}`
}