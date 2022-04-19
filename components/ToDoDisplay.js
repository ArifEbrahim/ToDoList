import { FlatList } from "react-native";
import ToDoItem from "./ToDoItem";

export default function ToDoDisplay(props) {
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <ToDoItem
          text={itemData.item.text}
          onDeleteToDo={props.onDeleteToDo}
          id={itemData.item.id}
        />
      )}
    />
  );
}
