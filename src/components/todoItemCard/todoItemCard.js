import React  from "react";
import {View,Text,TouchableOpacity} from "react-native"
import styles from "./todoItemCard.style";
const TodoItemCard = (props) => {
    return(
        <TouchableOpacity onPress={()=>props.onPress(props.todoItem)} onLongPress={()=>props.onLongPress(props.todoItem)}>
            <View style={[styles.cardContainer,props.todoItem.isDone?{opacity:0.5}:{opacity:1}]}>
                <Text style={[styles.todoText,props.todoItem.isDone?styles.textLineTrough:null]}>{props.todoItem.name}</Text>
            </View>
        </TouchableOpacity>
        
    )
}
export  default TodoItemCard
