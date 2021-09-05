import React, { useContext } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { WeatherContext } from "../../context/weather/WeatherContext";
import { styles } from "./Styles";

export default function ButtonSearch() {
  const { getWeather, value } = useContext(WeatherContext);

  return (
    <View style={styles.container}>
      <Button
        icon={<Icon name="search" size={15} color="white" />}
        title="Search"
        buttonStyle={styles.button}
        onPress={() => {
          getWeather(value);
        }}
      />
    </View>
  );
}
