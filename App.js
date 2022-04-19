import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { useState } from "react";
import ToDoItem from "./components/ToDoItem";

export default function App() {
  const [enteredToDoText, setEnteredToDoText] = useState("");
  const [toDoItems, setToDoItems] = useState([]);

  const toDoInputHandler = (enteredText) => {
    setEnteredToDoText(enteredText);
  };

  const addToDoHandler = () => {
    const updatedItems = [
      ...toDoItems,
      { text: enteredToDoText, id: Date.now() },
    ];
    setToDoItems(updatedItems);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your to-do" onChangeText={toDoInputHandler} />
        <Button title="Add to-do" onPress={addToDoHandler} />
      </View>
      <View style={styles.toDoItemsContainer}>
        <FlatList
          data={toDoItems}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => <ToDoItem text={itemData.item.text} />}
        />
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
