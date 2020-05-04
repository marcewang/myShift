var moment = require('moment');

// Jan 8th 2020
const startDate = 1578441600

//converts Unix DateStamp to "YYYY-MM-DD"
export const convertArrayUnixToDates = (unixArrayDates) => {
    const arrayDates = []
    unixArrayDates.map(date => {
        var dateString = moment.unix(date).utc().format('YYYY-MM-DD')
        arrayDates.push(dateString)
    })
    return arrayDates
}

// Takes a startDate and returns an object with working shifts and days off
export const getSevenDays = () => {
    const dayShiftsInUnix = [];
    const nightShiftsInUnix = [];
    const dayOffInUnix = [];
    let dateOn = startDate
    for (let h = 0; h < 50; h++) {
        for (let i = 0; i < 7; i++) {
            i === 0 && dateOn === startDate ? dateOn = dateOn : dateOn = dateOn + (86400)
            h % 2 === 0 ? dayShiftsInUnix.push(dateOn) : nightShiftsInUnix.push(dateOn)
        }
        for (let i = 0; i < 7; i++) {
            dateOn = dateOn + (86400)
            dayOffInUnix.push(dateOn)
        }
    }
    const calendar = {
        dayShifts: convertArrayUnixToDates(dayShiftsInUnix),
        daysOff: convertArrayUnixToDates(dayOffInUnix),
        nightShifts: convertArrayUnixToDates(nightShiftsInUnix)
    }
    return calendar;
}

// Splits array of dates into chunks(ex: every 7 days)
export const splitArray = (myArray, splitSize) => {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += splitSize) {
        const myChunk = myArray.slice(index, index + splitSize);
        tempArray.push(myChunk);
    }
    return tempArray;
}
// converts array of dates into the desired format for the calendar prop(markedDates)
export const getMarkedDates = (splittedArray, splitSize, color) => {
    const markedDates = {}
    const periodFirstDay = { startingDay: true, color: color }
    const periodMiddleDay = { color: color }
    const periodLastDay = { endingDay: true, color: color }
    splittedArray.map((array) => {
        array.map((date, index) => {
            switch (index) {
                case 0: markedDates[date] = periodFirstDay
                    break;
                case splitSize - 1: markedDates[date] = periodLastDay
                    break;
                default: markedDates[date] = periodMiddleDay
                    break;
            }
        })
    })
    return markedDates
}


export const getDShift = () => {
    const dayShiftDatesArray = getSevenDays().dayShifts;
    const dayShiftSplittedArray = splitArray(dayShiftDatesArray, 7)
    const nightShiftDatesArray = getSevenDays().nightShifts;
    const nightShiftSplittedArray = splitArray(nightShiftDatesArray, 7)
    const dayShift = getMarkedDates(dayShiftSplittedArray, 7, '#26D0CE');
    const nightShift = getMarkedDates(nightShiftSplittedArray, 7, '#2948ff');
    const workingShifts = {...dayShift, ...nightShift}
    return workingShifts;
}
