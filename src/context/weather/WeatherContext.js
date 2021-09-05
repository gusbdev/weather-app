import React, { createContext, useState } from "react";
import api from "../../services/api";

export const WeatherContext = createContext({});

export const WeatherProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");

  async function getWeather(city) {
    const response = await api.get(
      `weather?q=${city}&lang=pt_br&units=metric&appid=29b6ea7284c2c606758698f1492c0a87`
    );
    if (response.data) {
      setData(response.data);
    }
  }

  return (
    <WeatherContext.Provider value={{ data, getWeather, setValue, value }}>
      {children}
    </WeatherContext.Provider>
  );
};
