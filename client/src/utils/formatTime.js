
export function formatTime(date = new Date()) {
    let dateNumber = parseInt(date);
    // console.log(dateNumber);
    // console.log(typeof dateNumber);
    const days = Math.floor(dateNumber/(24*60*60*1000));
    const hours = Math.floor((dateNumber - days*24*60*60*1000)/(60*60*1000));
    let year = 1970;
    let daysLeft = days;
    // console.log(daysLeft);
    let iteration = 0;
    while(daysLeft > 365) {
        if(iteration%4 === 2) {
            daysLeft -= 366;
        } else {
            daysLeft -= 365;
        }
        year++;
        iteration++;
    }
    // console.log(daysLeft);
    let cutoffs = [['January',31,31],['February',59,60],['March',90,91],['April',120,121],['May',151,152],['June',181,182],['July',212,213],['August',243,244],['September',273,274],['October',304,305],['November',334,335],['December',365,366]];
    let monthIndex = 0;
    let monthFound = false;
    let dayVal = 0;
    do {
        if(iteration%4 === 2) {
            if(cutoffs[monthIndex][2] >= daysLeft) {
                monthFound = true;
                if(monthIndex === 0) {
                    dayVal = daysLeft;
                } else {
                    dayVal = daysLeft - cutoffs[monthIndex - 1][2];
                }
                break;
            }
        } else {
            if(cutoffs[monthIndex][1] >= daysLeft) {
                monthFound = true;
                if(monthIndex === 0) {
                    dayVal = daysLeft;
                } else {
                    dayVal = daysLeft - cutoffs[monthIndex - 1][1];
                }
                break;
            }
        }
        monthIndex++;
    } while(!monthFound);
    return `${cutoffs[monthIndex][0]} ${dayVal}, ${year}`;
}