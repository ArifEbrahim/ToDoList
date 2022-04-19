import { View, Text } from "react-native";

export default function ToDoItem(props) {
  return (
    <View>
      <Text>{props.text}</Text>
    </View>
  );
}
