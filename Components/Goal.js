import React from "react";
import { StyleSheet, Text,TouchableOpacity, View } from "react-native";

const Goal = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.pressed}>
    <View style={style.Goal}>
      <Text style={style.GoalText}>{props.text}</Text>
    </View>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  Goal: {
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 5,
    alignItems: "center",
    margin: 5,
    padding: 5,
    elevation: 50,
  },
  GoalText: {
    fontWeight: "bold",
    fontSize: 25,
  },
});
export default Goal;
