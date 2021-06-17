const DAYS_OF_THE_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function getDay() {
  const date = new Date();
  const dayIndex = date.getDay();
  return DAYS_OF_THE_WEEK[dayIndex];
}

module.exports = {
  DAYS_OF_THE_WEEK, 
  getDay
}