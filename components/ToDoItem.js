import { View, Text, Pressable, StyleSheet } from "react-native";

export default function ToDoItem(props) {
  const deleteToDoHandler = () => props.onDeleteToDo(props.id);

  return (
    <View style={styles.toDoItem}>
      <Pressable
        onPress={deleteToDoHandler}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.toDoText}>{props.text}</Text>
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  toDoItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "#595e60",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.5,
  },
  toDoText: {
    color: "ivory",
  },
});