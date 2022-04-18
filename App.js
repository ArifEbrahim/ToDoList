import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <View>
        <TextInput placeholder='Your to-do'/>
        <Button title='Add to-do' />
      </View>
      <View>
        <Text>List of to-do</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
