const $clock = document.getElementById("clock");
const $day = document.getElementById("day")

const $hours = $clock.querySelector(".hours");
const $minutes = $clock.querySelector(".minutes");
const $seconds = $clock.querySelector(".seconds");

const days = ["Domingo" ,"Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

function formatNumber(n) {
    if (n < 10) {
        return "0" + n;
    } else {
        return n;
    }
}

function setDate() {
    const date = new Date();

    const h = date.getHours();
    const m = date.getMinutes();
    const s = date.getSeconds();

    const day = date.getDay();
    const dayNumber = date.getTime();
    const month = date.getMonth() + 1;

    $hours.textContent = formatNumber(h);
    $minutes.textContent = formatNumber(m);
    $seconds.textContent = formatNumber(s);
    $day.textContent = `${days[day]}, ${dayNumber}/${month}`;
}

setInterval(setDate, 1000);