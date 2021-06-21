const DAYS_OF_THE_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function getDay() {
  const date = new Date();
  const dayIndex = date.getDay();
  return DAYS_OF_THE_WEEK[dayIndex];
}

function getTimeInSeconds(time) { // time === '4:10'
  const timeArray = time.split(':'); // timeArray === ['4', '10']
  timeArray[0] = parseInt(timeArray[0]) * 60; // timeArray === [240, '10']
  timeArray[1] = parseInt(timeArray[1]); // timeArray === [240, 10]
  return timeArray.reduce((a, b) = a + b); // 250
}

module.exports = {
  DAYS_OF_THE_WEEK, 
  getDay,
  getTimeInSeconds
}