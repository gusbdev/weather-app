import React from "react";
import { StyleSheet, View } from "react-native";
import BackgroundAnimation from "./src/components/BackgroundAnimation/BackgroundAnimation";
import ButtonSearch from "./src/components/Button/Button";
import WeatherCard from "./src/components/Card/WeatherCard";
import SearchBarCity from "./src/components/SearchBar/SearchBar";
import Time from "./src/components/Time/Time";
import { WeatherProvider } from "./src/context/weather/WeatherContext";

export default function App() {
  return (
    <View style={styles.container}>
      <WeatherProvider>
        <Time />
        <SearchBarCity />
        <ButtonSearch />
        <WeatherCard />
      </WeatherProvider>
      <BackgroundAnimation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
