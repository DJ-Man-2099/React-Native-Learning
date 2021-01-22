import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const icons = { add: require("../assets/ButtonIcons/add.png") };

const CircularButton = (props) => {
  const style = StyleSheet.create({
    button: {
      height: props.radius * 2,
      width: props.radius * 2,
      backgroundColor: props.color,
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
      
    <TouchableOpacity style={style.button} activeOpacity={0.7} onPress={props.onPress}>
        <Image source={icons[props.title]} style={style.image} />
    </TouchableOpacity>
  );
};

export default CircularButton;
