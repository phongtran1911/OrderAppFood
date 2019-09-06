import {
	StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  justifyContent: 'center',
      alignItems: 'center',
      width:null,
      height:null,
      resizeMode: 'stretch'
    },
    logo:{
        width: 240,
        resizeMode: 'stretch',
        marginTop: 30,
        marginBottom: 40,
        flex: 1,
    },
    
    textLogin: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 24
    },

    textInput:{
        padding: 10,
        fontSize: 12,
        backgroundColor: 'rgba(0,0,0,0.3)',
        color: '#FFF',
        margin: 5,
        width: 220,
        borderRadius: 25,
        flex: 1
    },
    containerLoginButton:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(180,93,55,0.5)',
        padding: 10,
        borderRadius: 25,
        width: 240,
        marginLeft: 5,
        marginTop: 10,
    },
    textLoginButton: {
        color: '#FFF',
        fontSize: 12,
    },
    textInputView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
      textRegister:{
        fontStyle:'italic',
        alignSelf:'flex-end',
        fontSize:12,
        color: '#FFF'
    }

  });

  export default styles;