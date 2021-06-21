function getTimeInSeconds(time) { // time === '4:10'
  const timeArray = time.split(':'); // timeArray === ['4', '10']
  timeArray[0] = parseInt(timeArray[0]) * 60; // timeArray === [240, '10']
  timeArray[1] = parseInt(timeArray[1]); // timeArray === [240, 10]
  return timeArray.reduce((a, b) => a + b); // 250
}

function getSecondsToTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const sec = seconds - minutes * 60;
  return `${minutes}:${sec}`;
}

module.exports = {
  getSecondsToTime,
  getTimeInSeconds
}