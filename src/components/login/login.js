import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import signIn from '../api/signIn';
import global from '../../global';

import saveToken from '../api/saveToken';
import styles from '../styles/loginStyle';

export default class Login extends Component {
  constructor(props) {
    super(props);
    background = require('../../img/background1.jpg');
    logo = require('../../img/logo.png');
    username = require('../../icons/username.png');
    password = require('../../icons/password.png');

    this.state = {
      username: '',
      password: '',
      result: 0,
    };
  }
  onSignIn() {
    const {username, password} = this.state;
    signIn(username, password)
      .then(res => {
        var obj = JSON.parse(res);
        if (obj.status == 'success') {
          Actions.mainmenu();
          saveToken(obj.user.id.toString());
        } else {
          alert('Tên đăng nhập hoặc mật khẩu sai!');
          //console.log(obj.status);
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <ImageBackground source={background} style={styles.container}>
        <View>
          <Image source={logo} style={styles.logo} />
          <View style={{flex: 2}}>
            {/* <View>
                           <Text style={styles.textLogin}>ĐĂNG NHẬP</Text>
						</View> */}
            <View style={styles.textInputView}>
              <Image source={username} style={styles.ImageStyle} />
              <TextInput
                style={styles.textInput}
                placeholder="Tên đăng nhập"
                placeholderTextColor={'#FFF'}
                onChangeText={value => this.setState({username: value})}
              />
            </View>
            <View style={styles.textInputView}>
              <Image source={password} style={styles.ImageStyle} />
              <TextInput
                style={styles.textInput}
                placeholder="Mật khẩu"
                placeholderTextColor={'#FFF'}
                secureTextEntry={true}
                onChangeText={value => this.setState({password: value})}
              />
            </View>
            <View>
              <Text
                style={styles.textRegister}
                onPress={() => Actions.forgotpass()}>
                Quên mật khẩu?
              </Text>
            </View>
            <View>
              <TouchableHighlight
                onPress={this.onSignIn.bind(this)}
                style={styles.containerLoginButton}>
                <Text style={styles.textLoginButton}>Đăng nhập</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
