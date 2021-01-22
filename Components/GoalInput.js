import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  Modal,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setGoal] = useState("");

  const changed = (text) => {
    setGoal(text);
  };
  return (
    <Modal
      visible={props.isShown}
      animationType="slide"
      transparent
      statusBarTranslucent
    >
      <KeyboardAvoidingView style={{flex:1, justifyContent: 'center', alignItems: 'center',}} behavior="height">
        <TouchableWithoutFeedback onPress={props.onCancel}>
          <View
            style={{
              position: "absolute",
              zIndex: 50,
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(52, 52, 52, 0.8)",
            }}
          />
        </TouchableWithoutFeedback>
        <View style={style.Goalinput}>
          <TextInput
            placeholder="Course Goal"
            style={style.text}
            onChangeText={changed}
            value={enteredGoal}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <View style={{ width: 100 }}>
              <Button
                title="Add Goal"
                onPress={() => {
                  props.add(enteredGoal);
                  setGoal("");
                }}
              />
            </View>
            <View style={{ width: 100 }}>
              <Button
                title="Cancel"
                color="red"
                onPress={() => {
                  props.onCancel();
                  setGoal("");
                }}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const style = StyleSheet.create({
  Goalinput: {
    position: "absolute",
    zIndex: 100,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    borderColor: "black",
    borderWidth: 10,
    borderRadius: 10,
    height: 200,
    width: 375,
    minHeight: 200,
    backgroundColor: "white",
  },
  text: {
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 5,
    width: "100%",
    padding: 5,
    marginBottom: 10,
  },
  modal: {
    width: "50%",
    height: "50%",
    backgroundColor: "red",
  },
});

export default GoalInput;
