const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

let sum = 0

// const getSleepHours = (day) => {
//   if (day === 'monday') {
//     return 8;
//   } else if (day === 'tuesday') {
//     return 8;
//   } else if (day === 'wednesday') {
//     return 8;
//   } else if (day === 'thursday') {
//     return 8;
//   } else if (day === 'friday') {
//     return 8;
//   } else if (day === 'saturday') {
//     return 8;
//   } else if (day === 'sunday') {
//     return 8;
//   } else {
//     return "that is not a valid day"
//   }
// }

const getSleepHours = (day) => {
  if (days.includes(day)) {
    return 8;
  } else {
    return "that is not a valid day"
  }
}

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
}

// console.log(getActualSleepHours())

const getIdealSleepHours = () => {
  const idealHours = 8
  return idealHours * 7;
}

// console.log(getIdealSleepHours())

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()

  if (actualSleepHours > idealSleepHours) {
    return (`You got ${actualSleepHours - idealSleepHours} hours more sleep than you needed`)
  } else if (actualSleepHours < idealSleepHours) {
    return (`You need to sleep for ${idealSleepHours - actualSleepHours} more hours. get more sleep diddums`)
  } else {
    return ("You got the perfect amount of sleep")
  }
}

console.log(calculateSleepDebt())
calculateSleepDebt()