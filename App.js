import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";
import { useState } from "react";
import ToDoDisplay from "./components/ToDoDisplay";
import ToDoInput from "./components/ToDoInput";

export default function App() {
  const [toDoItems, setToDoItems] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModalVisible = () => setIsModalVisible(!isModalVisible);

  const addToDoHandler = (enteredToDoText) => {
    const updatedItems = [
      ...toDoItems,
      { text: enteredToDoText, id: Date.now() },
    ];
    setToDoItems(updatedItems);
    toggleModalVisible();
  };

  const deleteToDoHandler = (id) => {
    const updatedItems = toDoItems.filter((item) => item.id !== id);
    setToDoItems(updatedItems);
  };

  return (
    <>
    <StatusBar style={"light"}/>
    <View style={styles.appContainer}>
      <Button
        title={"Add to-do"}
        color={"#D4F1F4"}
        onPress={toggleModalVisible}
      />
      <ToDoInput
        onAddToDo={addToDoHandler}
        showModal={isModalVisible}
        onCancel={toggleModalVisible}
      />
      <View style={styles.toDoItemsContainer}>
        <ToDoDisplay data={toDoItems} onDeleteToDo={deleteToDoHandler} />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#05445E",
  },
  toDoItemsContainer: {
    flex: 5,
  },
});
