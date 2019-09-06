import React,{Component} from 'react';
import {
	View,
	Text,
	Image,
	ImageBackground,
	TextInput,
	TouchableHighlight
} from 'react-native';
import styles from '../styles/loginStyle';
export default class ForgotPass extends Component{

	constructor(props){
		super(props);
		background = require('../../img/background1.jpg');
		logo = require('../../img/forgotpass.png');
		username = require('../../icons/mail.png');

		this.state = {
			mail: "",
		}
	}
	render(){
		return(
			<ImageBackground source={background} style={styles.container}>
				<View>
					<Image source={logo} style={styles.logo}></Image>
					<View style={{flex: 2}}>
						{/* <View>
                           <Text style={styles.textLogin}>ĐĂNG NHẬP</Text>
						</View> */}
						<View style={styles.textInputView}>
						  <Image source={username}	style={styles.ImageStyle} />
						  <TextInput style={styles.textInput} placeholder="Email" placeholderTextColor={"#FFF"} onChangeText={(value)=>this.setState({mail: value})}/>						  
						</View>
						<View>				 
						   <TouchableHighlight style={styles.containerLoginButton}>
						       <Text style={styles.textLoginButton}>Gửi</Text>
						   </TouchableHighlight>
						</View>
					</View>
				</View>				
			</ImageBackground>					
		)
	}
}