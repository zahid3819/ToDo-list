import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
const TodoInput = (props) => {
      //To store Todo 
  const [enteredTodoText, setEnteredTodoText] = useState('');

  function enterTodoText(enteredText){
    setEnteredTodoText(enteredText);
  }
  function onPress(){
    props.onTodoAdded(enteredTodoText);
    setEnteredTodoText('');
  }
    return ( 
        <View style={styles.flexForTodo}>
        <TextInput placeholder='Add your Todo' onChangeText={enterTodoText} value={enteredTodoText} style={styles.textInput}/>
        <Button title='Add Todo' color={'#fc0a77'} onPress={onPress} style={styles.buttonToDo}/>
      </View>
     );
}
 
export default TodoInput;

const styles= StyleSheet.create({
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
})