const date = new Date("Aug 26, 2024 00:00:00");
const TimeToNewYear = date.getTime();

const countdown = setInterval(function () {
  const now = new Date();
  const Today = now.getTime();

  const timeLeft = TimeToNewYear - Today;

  const monthsMS = 1000 * 60 * 60 * 24 * 31;
  const daysMS = 1000 * 60 * 60 * 24;
  const hoursMS = 1000 * 60 * 60;

  const month = Math.floor(timeLeft / monthsMS);
  const days = Math.floor(timeLeft / daysMS);
  const hours = Math.floor((timeLeft % daysMS) / hoursMS);

  document.getElementById(
    "contador"
  ).innerHTML = `Meses: ${month} /Dias:${days}/ Horas:${hours}`;

  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("contador").innerHTML = "Feliz ano Novoooo!";
  }
}, 1000);
