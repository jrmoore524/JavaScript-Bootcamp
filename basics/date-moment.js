//JavaScript date function
//Unix Epoch - January 1st 1970 00:00:00


const now = new Date()
const timeStamp = now.getTime()

const myDate = new Date(timeStamp)
console.log(myDate.getFullYear())

console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth() + 1}`)
console.log(`Day: ${now.getDate()}`)
console.log(`Hour: ${now.getHours()}`)
console.log(`Minutes: ${now.getMinutes()}`)
console.log(`Seconds: ${now.getSeconds()}`)

const dateOne = new Date('February 1 2022 00:00:00')
const dateTwo = new Date()

const dateOneTimestamp = dateOne.getTime()
const dateTwoTimestamp = dateTwo.getTime()

if (dateOneTimestamp < dateTwoTimestamp) {
    console.log(dateOne.toString())
} else if (dateTwoTimestamp < dateOneTimestamp) {
    console.log(dateTwo.toString())
} 

//Use 3rd party library (moment JS)
//Moment Library
//Script tag - <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment-with-locales.min.js"></script>

// const now = moment()
// now.subtract(1, 'week').subtract(20, 'days')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())
// const nowTimestamp = now.valueOf()

// console.log(moment(nowTimestamp).toString())

const birthday = moment()
birthday.year(1987).month(1).date(1)
console.log(birthday.format('MMM D, YYYY'))

