import React from "react";
import { Image, StyleSheet, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const icons = { add: require("../assets/ButtonIcons/add.png") };

const CircularButton = (props) => {
  const style = StyleSheet.create({
    button: {
      height: props.radius * 2,
      width: props.radius * 2,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      borderColor: "black",
      borderWidth: 4,
      borderRadius: props.radius,
      margin: 15,
    },
    image: {
      height: props.radius * 2 * 0.8,
      width: props.radius * 2 * 0.8,
    },
  });

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
        <LinearGradient style={style.button} colors={props.colors} end={props.end} start={props.start}>
          <Image source={icons[props.title]} style={style.image} />
        </LinearGradient>
    </TouchableOpacity>
  );
};

export default CircularButton;
