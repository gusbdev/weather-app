import React, { useContext, useState } from "react";
import { View } from "react-native";
import { SearchBar } from "react-native-elements";
import { WeatherContext } from "../../context/weather/WeatherContext";
import { styles } from "../SearchBar/Styles";

export default function SearchBarCity() {
  const { value, setValue } = useContext(WeatherContext);

  return (
    <View style={styles.search}>
      <SearchBar
        placeholder="Type a city"
        onChangeText={(text) => setValue(text)}
        value={value}
        style={styles.searchWrapper}
      />
    </View>
  );
}
