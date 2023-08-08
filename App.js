import { useState } from 'react';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';
import { StyleSheet, View, FlatList } from 'react-native';

  
export default function App() {
  //to show Todo
  const [showTodosList, setShowTodosList] = useState([]);

  function addTodoText(enteredTodoText){
    if(enteredTodoText != ""){
    setShowTodosList([...showTodosList, {text: enteredTodoText, id: Math.random().toString()}]);
    }
  }

  return (
    <View style={styles.container}>
      <TodoInput onTodoAdded={addTodoText}/>
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
  buttonToDo:{
    borderRadius: 10,
  },
  showTodosList:{
    height: '82%',
  },

  
});
