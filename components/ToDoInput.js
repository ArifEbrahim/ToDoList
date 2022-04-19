import { TextInput, Button } from "react-native";
import { useState } from "react";

export default function ToDoInput(props) {
  const [enteredToDoText, setEnteredToDoText] = useState("");

  const toDoInputHandler = (enteredText) => {
    setEnteredToDoText(enteredText);
  };

  const addToDoHandler = () => {
    props.onAddToDo(enteredToDoText)
  }

  return (
    <>
      <TextInput placeholder="Your to-do" onChangeText={toDoInputHandler} />
      <Button title="Add to-do" onPress={addToDoHandler} />
    </>
  );
}
