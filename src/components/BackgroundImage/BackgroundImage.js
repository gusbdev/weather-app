import React from "react";
import { Image, View } from "react-native";

import { styles } from "./Styles";
import { generateGreetingsBackground } from "../../util/util";

export default function BackgroundAnimation() {
  return (
    <View style={styles.container}>
      <Image
        source={generateGreetingsBackground()}
        style={styles.backgroundImage}
      />
    </View>
  );
}
