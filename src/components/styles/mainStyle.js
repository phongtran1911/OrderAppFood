import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    containerInput:{
        flex: 1,
        backgroundColor: "#FFF",
        borderColor:'#FFF',
        borderWidth:1,
        flexDirection:'column'
    },
    inputRow:{
        flex:1,
        flexDirection:'row'
    },
    inputButton:{
        flex:1,
        padding:20,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#ff9f56',
        justifyContent: 'center',
        alignItems:'center',
    },
    textInputButton:{
        fontSize:25,
        fontWeight:'400',
        color:'#000'
    },
    phobackground: {
        justifyContent:'center',
        alignItems:'center',
        resizeMode: 'cover',
    },
    images:{
        height:150,
        width:150,
        alignItems:'center'
    }
})

export default styles;