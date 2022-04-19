import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredToDoText, setEnteredToDoText] = useState("");
  const [toDoItems, setToDoItems] = useState([]);

  const toDoInputHandler = (enteredText) => {
    setEnteredToDoText(enteredText);
  };

  const addToDoHandler = () => {
    const updatedItems = [...toDoItems, enteredToDoText];
    setToDoItems(updatedItems);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your to-do" onChangeText={toDoInputHandler} />
        <Button title="Add to-do" onPress={addToDoHandler} />
      </View>
      <View style={styles.toDoItemsContainer}>
        <Text>List of to-do</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: 'darkgrey',
    borderBottomWidth: 1
  },
  toDoItemsContainer: {
    flex: 5
  },
});
