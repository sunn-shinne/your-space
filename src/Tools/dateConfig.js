// добавляет к дате переданное количество дней
const  addDays = (date, numDays) => {
    let res = new Date(date)
    res = res.setDate(date.getDate() + numDays)
    res = new Date(Number(res))

    return res
}


// добавляет к дате переданное количество месяцев
const  addMonths = (date, numMonths) => {
    let res = new Date(date)
    res = res.setMonth(date.getMonth() + numMonths)
    res = new Date(Number(res))

    return res
}


// возвращает дату в удобном для вывода коротком формате
const dateToString = (date) => {

    let day = date.getDate()
    let month = date.getMonth() + 1;

    if (day.toString().length === 1) {
        day = `0${day}`
    }

    if (month.toString().length === 1) {
        month = `0${month}`
    }
    return `${day}-${month}`
}

// возвращает дату в удобном для вывода длинном формате
const dateToLongString = (date) => {
    let year = date.getFullYear();
    let day = date.getDate()
    let month = date.getMonth() + 1;

    if (day.toString().length === 1) {
        day = `0${day}`
    }

    if (month.toString().length === 1) {
        month = `0${month}`
    }
    return `${year}-${month}-${day}`
}

// возвращает время в удобном для вывода формате
const timeToString = (date) => {
    if (!date) {
        return ''
    }

    let hours = date.getHours()
    let minutes = date.getMinutes();

    if (hours.toString().length === 1) {
        hours = `0${hours}`
    }
    if (minutes.toString().length === 1) {
        minutes = `0${minutes}`
    }

    return `${hours}:${minutes}`
}

// переводит время из строкового формата в Date
const timeStringToDate = (string) => {
    const hours = string.slice(0, 2)
    const minutes = string.slice(3)
    const date = new Date(0, 0, 0, hours, minutes, 0, 0)
    return date
}

// возвращает название дня переданной даты
const getDayName = (date) => {
    const daysName =["sunday", "monday", "tuesday", "wednesd", "thursday", "friday", "saturday"]
    return daysName[date.getDay()]
}

// возвращает название месяца переданной даты
const getMonthName = (date) => {
    const MonthName =[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return MonthName[date.getMonth()]
}

export {dateToString, dateToLongString, addDays, getDayName, getMonthName, addMonths, timeToString, timeStringToDate}