require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

console.log("ENV API Key:", process.env.WEATHER_API_KEY);

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/weather", async (req, res) => {
  const city = req.query.city;

  if (!city) {
    return res.json({ error: "City required" });
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;

  console.log("Request URL:", url);

  const response = await fetch(url);
  const data = await response.json();

  console.log("API Response:", data);

  res.json(data);
});

app.listen(PORT, () => {
  console.log("Server running on port 5000");
});
