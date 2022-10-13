/*
Programming 1: Essentials
Week: 4
Date: 13-10-2022
=========================
Digital Clock with millisends
*/
const tick = () => {
  const date = new Date();
  let timeStr = date.toTimeString().split(' ')[0];
  timeStr += ' (' + date.getMilliseconds() + ')';
  console.log(timeStr);
};
tick();
setInterval(tick, 1);