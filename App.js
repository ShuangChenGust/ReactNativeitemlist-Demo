import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, YellowBox, FlatList } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from "./components/addTodo";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import DeleteIcon from '@material-ui/icons/Delete';


export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  //pass the parameter of "key", filter function is to filter the parameters,
  //arrow function defines which param should be filtered,(key!= key can be keepted)
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      alert("OOPS!", "TODOS MUST BE OVER 3 CHARS LONG", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    // <TouchableWithoutFeedback onPress={()=>{
    //   Keyboard.dismiss();
    //   console.log('dismissed keyboard')
    // }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            
            <FlatList
              data={todos}
              renderItem={({ item }) => {
                return (

                  // <Text>{item.text}</Text>
                  <View>
                    <TodoItem item={item} pressHandler={pressHandler} /> 
                    <DeleteIcon />
                  </View>
                ) 
              }}
            />
            
          </View>
        </View>
      </View>
    // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header:{
    backgroundColor:'pink',
    padding:20,
  },
  boldText:{
    fontWeight:"bold"
  },
  body:{
    backgroundColor:"yellow",
    padding:"20"
  },
  title:{
    textAlign:"center",
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  }
});
