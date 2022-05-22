import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(0,0,0,1)",
        paddingTop:3,
        paddingLeft:9,
        paddingRight:9,
        paddingBottom:6,
        borderRadius:10,
        marginTop:Dimensions.get("window").height/40
    },
    textInput:{
        color:'white',
        borderBottomWidth:2,
        borderBottomColor:'white',
        marginBottom:10,
    },
    button:{
        borderRadius:10,
        padding:10,
        alignItems:"center",
    },
    buttonText:{
        color:"white",
        fontWeight:"800",
        fontSize:20
    },
})

export default styles