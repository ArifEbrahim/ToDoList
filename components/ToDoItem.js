import { View, Text, Pressable } from "react-native";

export default function ToDoItem(props) {
  const deleteToDoHandler = () => props.onDeleteToDo(props.id);

  return (
    <Pressable onPress={deleteToDoHandler}>
      <View>
        <Text>{props.text}</Text>
      </View>
    </Pressable>
  );
}
