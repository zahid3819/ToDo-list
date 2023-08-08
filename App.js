import { useState } from 'react';
import TodoItem from './components/TodoItem';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';

  
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
    setShowTodosList([...showTodosList, {text: enteredTodoText, id: Math.random().toString()}]);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.flexForTodo}>
        <TextInput placeholder='Add your Todo' onChangeText={enterTodoText} style={styles.textInput}/>
        <Button title='Add Todo' color={'#fc0a77'} onPress={addTodoText} style={styles.buttonToDo}/>
      </View>
      <FlatList style={styles.showTodosList} data={showTodosList} renderItem={(todoItem) =>{
        return(
          <TodoItem text={todoItem.item.text}/>
        );
      }} keyExtractor={(item, index) =>{
        return(
          item.id
        )
      }}/>
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
    marginTop: 30,
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#cccccc',
    width: "75%",
    marginRight: 5,
    padding: 8,
    borderRadius: 50,
    fontSize: 20,
    color: '#fc0a77',
    paddingLeft: 20,
    
  },
  buttonToDo:{
    borderRadius: 10,
  },
  showTodosList:{
    height: '82%',
  },

  
});
