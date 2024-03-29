const dayBox = document.getElementById("day-box");
const hrBox = document.getElementById("hr-box");
const minBox = document.getElementById("min-box");
const secBox = document.getElementById("sec-box");

//Year, Month, Day, Hour, Minute, Second
//Month is 0 indexed
// let endDate = new Date(2023, 10, 24, 00, 00); //is for Thanksgiving
// let endDate = new Date(2023, 3, 16, 00, 00); //is for Joey Birthday
// let endDate = new Date(2023, 7, 03, 00, 00); //is for Gianni Birthday

const endDate = new Date(2024, 0, 1, 00, 00);

const endTime = endDate.getTime();

const addZeroes = (num) => (num < 10 ? `0${num}` : num);
// console.log(endDate); //testing to make sure it works

const countdown = () => {
  const todayDate = new Date();
  const todayTime = todayDate.getTime();
  const remainingTime = endTime - todayTime;
  const oneMin = 60 * 1000;
  const oneHr = 60 * oneMin;
  const oneDay = 24 * oneHr;

  if (endTime < todayTime) {
    clearInterval(i);
    document.querySelector(
      ".countdown"
    ).innerHTML = `<h1>HAPPY NEW YEAR🥳🎉🎊</h1>`;
  } else {
    let daysLeft = Math.floor(remainingTime / oneDay);
    let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
    let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
    let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

    dayBox.textContent = addZeroes(daysLeft); //Displaying the days left
    hrBox.textContent = addZeroes(hrsLeft); //Displaying the hours left
    minBox.textContent = addZeroes(minsLeft); //Displaying the minutes left
    secBox.textContent = addZeroes(secsLeft); //Displaying the seconds left
  }
};
let i = setInterval(countdown, 1000);
countdown();
