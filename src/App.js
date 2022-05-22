import React,{useState} from 'react'
import {View,Text,StyleSheet,FlatList, Dimensions} from 'react-native'
import { useEffect } from 'react/cjs/react.production.min';
import TodoItemCard from './components/todoItemCard';
import TodoTextInput from './components/todoTextInput';


const App = () => {
  const renderItem = ({item}) => <TodoItemCard todoItem={item} onPress={changeTodoStatus} onLongPress={removeItem}></TodoItemCard>
  const itemSeperator = ({}) => <View style={styles.seperator}></View>
  const [text,setText] = useState("");
  const [todoList,setTodoList]=useState([]);
  const [todosCount,setTodosCount] = useState(0);
  const addTodoItem = ()=>{
    if(text.length>0){
      setTodoList([...todoList,{name:text,isDone:false}])
      setText("")
      setTodosCount(todosCount+1)
    }
  }
  const changeTodoStatus = (todoItem)=>{
    console.log(todoItem)
    let index = todoList.indexOf(todoItem)
    if(index>-1){
      let todoItem = todoList[index]
      todoItem.isDone = !todoItem.isDone
      setTodoList([...todoList])
      if(todoItem.isDone){
        setTodosCount(todosCount-1)
      }
      else{
        setTodosCount(todosCount+1)
      }

    }
  }
  const removeItem =(todoItem)=>{
    let index = todoList.indexOf(todoItem);
    if(index>-1){
      todoList.splice(index,1)
      setTodoList([...todoList])
      if(!todoItem.isDone){
        setTodosCount(todosCount-1)
      }

    }
  }
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Todos({todosCount})</Text>
      <FlatList
       data={todoList} 
       renderItem={renderItem}
       keyExtractor={(item,index)=>index}
       ItemSeparatorComponent={itemSeperator} ></FlatList>
      <TodoTextInput onChangeText={setText} value={text} onPress={addTodoItem} ></TodoTextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"rgba(0,0,0,0.9)",
    flex:1,
    padding:10
  },
  seperator:{
    flex:1,
    height:Dimensions.get("window").height/40
  },
  title:{
    color:"white",
    fontSize:35,
    textAlign:'center',
    marginBottom:15
  }
})

export default App