import React from "react";
import { TextInput, View, TouchableOpacity, Text } from "react-native"
import styles from "./todoTextInput.style";

const TodoTextInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput placeholderTextColor="gray" placeholder="Add new task from here" value={props.value} onChangeText={props.onChangeText} style={styles.textInput}></TextInput>
            <TouchableOpacity
                disabled={props.value.length == 0 ? true : false}
                style={[styles.button, props.value.length > 0 ? { backgroundColor: '#ff4f81' } : { backgroundColor: 'rgba(255, 79, 129,0.5)' }]}
                onPress={props.onPress}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
        </View>
    )
}


export default TodoTextInput