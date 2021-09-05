import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { styles } from "./Styles";

//Import moment for date and time
import moment from "moment";
import { generateGreetings } from "../../util/util";

export default function Time() {
  const [currentDate, setCurrentDate] = useState("");

  const time = useCallback(() => {
    setInterval(() => {
      var date = moment().utcOffset("-03:00").format(" hh:mm:ss a");
      setCurrentDate(date);
    }, 1000);
  }, []);

  useEffect(() => {
    time();
  }, []);

  return (
    <SafeAreaView style={{ display: "flex" }}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>{currentDate}</Text>
          <Text style={styles.textStyle}>{generateGreetings()}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
