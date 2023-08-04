import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.flexForTodo}>
        <TextInput placeholder='Add your Todo'  style={styles.textInput}/>
        <Button title='Add Todo' style={styles.buttonToDo}/>
      </View>
      <View>
        <Text>
          All Todos Here!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop: 30,
   paddingHorizontal: 10
  },
  flexForTodo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: "80%",
    marginRight: 5,
    padding: 8

  },
  buttonToDo:{
    borderRadius: 10,
  }
  
});
