'use strict';
const buttonSubmit = document.querySelector('.btns');
const buttonClear = document.querySelector('.btnc');
const inputValue = document.querySelector('.area');
const name = document.querySelector('.name');
const desc = document.querySelector('.desc');
const temp = document.querySelector('.temp');
const displayContainer = document.querySelector('.display');

const renderWeather = function (data) {
  console.log(data);
  const html = ` 
  <div class="display">
  <h1 class="d name">${data.name},${data.sys.country}</h1>
  <p class="d desc">${data.weather[0].description}</p>
  <p class="d temp">tempreture ${(data.main.temp - 273).toFixed(1)}°C</p>
  <p class= "d humid">humidity ${data.main.humidity} g/kg</p>
  </div>
  `;
  // desc.value = temp.value = '';
  inputValue.value = '';
  displayContainer.innerHTML = '';
  displayContainer.insertAdjacentHTML('afterbegin', html);
};

buttonSubmit.addEventListener('click', function () {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=80e6b5839c92d4284312b16db0589dc2`
  )
    .then(
      response => response.json(),
      err => alert(err)
    )
    .then(data => renderWeather(data));
});

buttonClear.addEventListener('click', function () {
  inputValue.value = '';
  displayContainer.innerHTML = '';
});
