const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const autoclicker = document.getElementById("autoclicker");
const clickupgrade = document.getElementById("clickupgrade");
const clickupgrade2 = document.getElementById("clickupgrade2");
const info = document.getElementById("info");

// () => - arow funkce
let cookies = 0;
let cookieIncrease = 1;

let autoclickerPrice = 50;
let autoclickerIncrease = 0;


cookie.onclick = () => {
  cookies += cookieIncrease;
  counter.innerHTML = cookies;
};
clickupgrade.onclick = () => {
    if (clickupgrade >= 10) {
        clickupgrade -= 10; 
        cookieIncrease++;
        counter.innerHTML = clickupgrade;
        let t = cookieIncrease - 1;
        info.innerHTML = `You bought a new upgrade with turbo ${t}x`;
    }
}
autoclicker.onclick = () => {
  if (cookies >= autoclickerPrice) {
    cookies -= autoclickerPrice;
    counter.innerHTML = cookies;
    autoclickerPrice *= 2;
    autoclicker.innerHTML = `buy a autoclicker : ${autoclickerPrice}`;
    if (autoclickerIncrease == 0) {
      setInterval(() => {
        cookies += autoclickerIncrease;
        counter.innerHTML = cookies;
      }, 1000);
    }
    autoclickerIncrease++;
  }
};
