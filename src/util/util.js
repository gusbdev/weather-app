import moment from "moment";

import backgroundMorning from "../../assets/morning.png";
import backgroundAfternoon from "../../assets/afternoon.png";
import backgroundEvening from "../../assets/evening.png";
import backgroundNight from "../../assets/night.jpg";

function generateGreetings() {
  var currentHour = moment().format("HH");

  if (currentHour >= 3 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 15) {
    return "Good Afternoon";
  } else if (currentHour >= 15 && currentHour < 20) {
    return "Good Evening";
  } else if (currentHour >= 20 && currentHour < 3) {
    return "Good Night";
  } else {
    return "Hello";
  }
}

const generateGreetingsBackground = () => {
  var currentHour = moment().format("HH");

  if (currentHour >= 3 && currentHour < 12) {
    return backgroundMorning;
  } else if (currentHour >= 12 && currentHour < 15) {
    return backgroundAfternoon;
  } else if (currentHour >= 15 && currentHour < 20) {
    return backgroundEvening;
  } else if (currentHour >= 20 && currentHour < 3) {
    return backgroundNight;
  } else {
    return "Hello";
  }
};

export { generateGreetings, generateGreetingsBackground };
