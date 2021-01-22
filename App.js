import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  useWindowDimensions 
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GoalInput from "./Components/GoalInput";
import GoalItem from './Components/Goal';
import CircularButton from './Components/CircularButton'


export default App = () => {
  const windowHeight = useWindowDimensions().height;

  const [Goals, editGoals] = useState([{ id: "0", text: "David" }]);
  const [isShown, switchModal] = useState(false);


  const add = (enteredGoal) => {
    editGoals((oldGoals) => [
      ...oldGoals,
      { id: oldGoals.length.toString(), text: enteredGoal },
    ]);
    switchModal(false)
  };

  const remove = (key)=>{
    const newGoals = [...Goals];
    const index = newGoals.findIndex((value)=>value.id===key);
    newGoals.splice(index,1)
    editGoals([...newGoals])
  }

  const showModal=()=>{
    switchModal(true);
  }

  return (
    <LinearGradient
      colors={["red", "blue"]}
      style={{
        minHeight: windowHeight,
      }}
      end={[0, 0]}
      start={[1, 1]}
    >
      <View style={style.app}>
      <GoalInput add={add} isShown={isShown} onCancel={switchModal.bind(this,false)}/>
      <CircularButton title="add" radius={50} color="blue" onPress={showModal} />
        {/** use for potentially long lists */}
        <FlatList
        keyExtractor={(item, index)=>item.id}
          data={Goals}
          renderItem={(Goal) => (
            <GoalItem pressed={remove.bind(this,Goal.item.id)} text={Goal.item.text}/>
          )}
        />
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  app: {
    height: "100%",
    marginHorizontal: "10%",
    marginTop: 50
  },
});

