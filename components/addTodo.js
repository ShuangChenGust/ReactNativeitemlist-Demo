import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, Button,View } from 'react-native'

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


export default function AddTodo({submitHandler}){
    const[text, setText] = useState('');

    const changeHandler=(val)=>{
        setText(val)
    }



    return(
        <View>
            <TextInput 
                style = {styles.input}
                placeholder='new todo....'
                onChangeText={changeHandler}
            />
            <Button onPress={()=>submitHandler(text)} title='add todo' color='coral'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderWidth:1,
        borderBottomColor:'#ddd'
    }
})