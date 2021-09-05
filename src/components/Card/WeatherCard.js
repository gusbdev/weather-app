import React, { useContext } from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-elements";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { WeatherContext } from "../../context/weather/WeatherContext";
import { styles } from "./Styles";

export default function WeatherCard() {
  const { data } = useContext(WeatherContext);

  return (
    <View style={styles.container}>
      <Card
        title="Weather Card"
        elevation={7}
        containerStyle={styles.card}
        wrapperStyle={styles.cardSize}
      >
        <Text style={styles.paragraph}>
          Latitude: {data !== "" ? data.coord.lat : ""}
        </Text>
        <Text style={styles.paragraph}>
          Longitude:{data !== "" ? data.coord.lon : ""}
        </Text>
        <Text style={styles.paragraph}>
          Temperature:{data !== "" ? data.main.temp : ""}
        </Text>
        <Text style={styles.paragraph}>
          Condition:{data !== "" ? data.weather[0].main : ""}
        </Text>
        <Text style={styles.paragraph}>
          Humidity:{data !== "" ? data.main.humidity : ""}
        </Text>
      </Card>
    </View>
  );
}
