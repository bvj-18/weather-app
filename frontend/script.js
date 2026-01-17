async function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  if (!city) {
    result.innerText = "Enter a city";
    return;
  }

  const res = await fetch(
    `http://localhost:5000/weather?city=${city}`
  );
  const data = await res.json();

  if (data.error || data.cod !== 200) {
    result.innerText = "City not found";
    return;
  }

  result.innerHTML = `
    <h3>${data.name}</h3>
    <p>${data.weather[0].description}</p>
    <p><strong>${data.main.temp} °C</strong></p>
  `;
}
