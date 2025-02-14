const API_key = "d1c6f05cf14ea3307519dc7478511e79";

const Meteo = {
  datiMeteo: async (city) => {
    try {
      const fetchCity = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`);
      const cityName = await fetchCity.json(); //prendo la fetch della città
      console.log(cityName);
      if (!cityName.length) throw new Error("Città non trovata");

      const { lat, lon } = cityName[0]; //prendo lat e lon dalla città

      const fetchWeather = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_key}`
      );
      const weatherData = await fetchWeather.json(); //ottengo il meteo della città grazie a lat e lon

      const fecthForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_key}`
      );
      const forecastData = await fecthForecast.json(); //ottengo il meteo per 5 giorni

      return { weatherData, forecastData };
    } catch (error) {
      console.error("Errore nel caricamento", error);
    }
  },
};

export default Meteo;
