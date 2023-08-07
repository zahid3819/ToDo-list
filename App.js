import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  //To store Todo 
  const [enteredTodoText, setEnteredTodoText] = useState('');
  //to show Todo
  const [showTodosList, setShowTodosList] = useState([]);

  function enterTodoText(enteredText){
    setEnteredTodoText(enteredText);
  }

  function addTodoText(){
    if(enteredTodoText != ""){
    setShowTodosList([...showTodosList, enteredTodoText]);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.flexForTodo}>
        <TextInput placeholder='Add your Todo' onChangeText={enterTodoText} style={styles.textInput}/>
        <Button title='Add Todo' onPress={addTodoText} style={styles.buttonToDo}/>
      </View>
      <ScrollView>
        {showTodosList.map((todo) => <Text style={styles.todo} key={todo}>{todo}</Text>)}
      </ScrollView>
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
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 20,
    marginBottom: 20,
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
  },
  todo:{
    borderWidth: 1,
    borderColor: '#cccccc',
    marginVertical: 5,
    padding: 10,
    textAlign: 'center',
    fontSize: 24,
  }
  
});
