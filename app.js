const cityHtml = document.querySelector(".city");
const city2Html = document.querySelector(".city2");
const countryCodeHtml = document.querySelector(".countryCode");
const flagFinalHtml = document.querySelector(".flagfinal");
// const display = document.querySelector(".display");

let country
let city
let flag
let countryCode


const apiUrl = 'https://api.ipdata.co/?api-key=be253ee6a050d2b0ba3c5a03e2684dd05b8aa9fec2c9b292797a4d63'

async function getCountryName(name) {
  const response = await fetch(apiUrl);
  const responseData = await response.json();

  
  countryCode = responseData.country_code;
  city = responseData.city;
  flag = responseData.flag;
  
  if(responseData.city === null) city = responseData.continent_name;


  console.log(responseData);


  cityHtml.innerHTML = city
  city2Html.innerHTML = city
  countryCodeHtml.innerHTML = ", " + countryCode
  flagFinalHtml.src = flag

}

getCountryName()






function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = "0h " + minutes + "m " + seconds + "s";

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 19.5,
      display = document.querySelector('.display');
  startTimer(fiveMinutes, display);

};