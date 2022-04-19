import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import ToDoDisplay from "./components/ToDoDisplay";
import ToDoInput from "./components/ToDoInput";

export default function App() {
  const [toDoItems, setToDoItems] = useState([]);

  const toDoInputHandler = (enteredText) => {
    setEnteredToDoText(enteredText);
  };

  const addToDoHandler = (enteredToDoText) => {
    const updatedItems = [
      ...toDoItems,
      { text: enteredToDoText, id: Date.now() },
    ];
    setToDoItems(updatedItems);
  };

  const deleteToDoHandler = (id) => {
    const updatedItems = toDoItems.filter((item) => item.id !== id);
    setToDoItems(updatedItems);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <ToDoInput onAddToDo={addToDoHandler} />
      </View>
      <View style={styles.toDoItemsContainer}>
        <ToDoDisplay data={toDoItems} onDeleteToDo={deleteToDoHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "darkgrey",
    borderBottomWidth: 1,
  },
  toDoItemsContainer: {
    flex: 5,
  },
});
