import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Meteo from "./Meteo";
import Loading from "./Loading";
import MyNavbar from "./MyNavbar";

function Details() {
  const { city } = useParams();
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    async function fetchMeteo() {
      const dati = await Meteo.datiMeteo(city);
      if (dati) {
        setWeather(dati.weatherData);
        const filtro = filtroGiornoForecast(dati.forecastData.list);
        setForecast(filtro); // per evitare le 3 ore
      }
    }
    fetchMeteo();
  }, [city]);

  const filtroGiornoForecast = (listaForecast) => {
    const giornoForecast = {};

    listaForecast.forEach((item) => {
      const giorno = item.dt_txt.split(" ")[0];
      if (!giornoForecast[giorno] && item.dt_txt.includes("12:00:00")) {
        giornoForecast[giorno] = item;
      }
    });

    return Object.values(giornoForecast);
  };

  if (!weather || !forecast)
    return (
      <div className="py-5">
        <Loading />
      </div>
    );

  return (
    <>
      <MyNavbar />
      <div className="container mt-4">
        <h3 className=" py-1  ps-3 success text-white">
          Meteo attuale a <strong>{city}</strong>
        </h3>
        <p className="textimp pt-1 ms-3">
          <span className="me-1">🌡️</span> Temperatura: {weather.main.temp}°C
        </p>
        <p className="textimp">
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
            id="icon"
          />
          {weather.weather[0].description}
        </p>

        <div className="pt-4">
          <h5 className=" py-1  ps-3 success text-white">Previsioni per i prossimi 5 giorni:</h5>
          <div className="pt-1">
            {forecast.map((item, index) => (
              <div key={index} className="my-2">
                <p className="ms-3 fs-6">{new Date(item.dt_txt).toLocaleDateString()}</p>
                <p className="ms-3">
                  <span className="me-2 ms-1">🌡️</span> Temperatura: {item.main.temp}°C
                </p>
                <p className="ms-2">
                  {" "}
                  <img
                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt={item.weather[0].description}
                    id="icon"
                  />
                  {item.weather[0].description}
                </p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
