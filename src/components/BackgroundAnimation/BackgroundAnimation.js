import React, { useEffect } from "react";
import { Animated, Easing, Dimensions } from "react-native";

import backgroundImage from "../../../assets/background.png";
import backgroundMorning from "../../../assets/morning.png";
import backgroundAfternoon from "../../../assets/afternoon.png";
import backgroundEvening from "../../../assets/evening.png";
import backgroundNight from "../../../assets/night.jpg";
import { BackgroundImage } from "./Styles";
import {
  ANIMATION_DURATION,
  ANIMATION_TO_VALUE,
  INPUT_RANGE_END,
  INPUT_RANGE_START,
  OUTPUT_RANGE_END,
  OUTPUT_RANGE_START,
} from "../../../config/Constants";
import { generateGreetingsBackground } from "../../util/util";

const translateIn = {
  inX: -(Dimensions.get("window").width * 0.9375),
  inY: -(Dimensions.get("window").height * 0.9375),
};

export default function BackgroundAnimation() {
  const initialValue = 0;
  const translateValue = new Animated.Value(initialValue);

  useEffect(() => {
    const translate = () => {
      translateValue.setValue(initialValue);
      Animated.timing(translateValue, {
        toValue: ANIMATION_TO_VALUE,
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => translate());
    };

    translate();
  }, [translateValue]);

  const translateAnimation = translateValue.interpolate({
    inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
    outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
  });

  const AnimatedImage = Animated.createAnimatedComponent(BackgroundImage);

  return (
    <AnimatedImage
      source={generateGreetingsBackground()}
      resizeMode="repeat"
      style={{
        zIndex: -1,
        transform: [
          {
            translateX: translateAnimation,
          },
          {
            translateY: translateAnimation,
          },
        ],
      }}
      translateIn={translateIn}
    />
  );
}
