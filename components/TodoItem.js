import { StyleSheet, Text } from "react-native";
const todoItem = (props) => {
    return ( 
        <Text style={styles.todo}>{props.text}</Text>
     );
}
 
export default todoItem;

const styles = StyleSheet.create({
    todo:{
        borderWidth: 1,
        borderColor: '#cccccc',
        marginVertical: 5,
        padding: 10,
        textAlign: 'center',
        backgroundColor:'#fc0a77',
        color: 'white',
        borderRadius: 50,
        fontSize: 20,
      }
})

// sfc----Stateless Functional Components