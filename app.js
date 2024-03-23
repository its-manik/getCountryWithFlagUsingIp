const cityHtml = document.querySelector(".city");
const city2Html = document.querySelector(".city2");
const countryCodeHtml = document.querySelector(".countryCode");
const flagFinalHtml = document.querySelector(".flagfinal");
// const display = document.querySelector(".display");

let country
let city
let flag
let countryCode


const ipapi = 'http://ip-api.com/json/?fields=61439'

async function getCountryName(name) {
  const ipApiResponse = await fetch(ipapi);
  const ipApiResponseData = await ipApiResponse.json();
  
  country = ipApiResponseData.country

  

  const restcontriesurl = 'https://restcountries.com/v3.1/name/' + country;
  const restContriesResponse = await fetch(restcontriesurl);
  const restContriesResponseData = await restContriesResponse.json();


  city = restContriesResponseData[0].capital[0];
  flag = restContriesResponseData[0].flags.png;
  countryCode = ipApiResponseData.countryCode;

  // console.log(ipApiResponseData);
  console.log(restContriesResponseData);
  console.log(city);
  console.log(flag);
  console.log(countryCode);

  cityHtml.innerHTML = city
  city2Html.innerHTML = city
  countryCodeHtml.innerHTML = ", " + countryCode
  flagFinalHtml.src = flag

  // console.log();
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