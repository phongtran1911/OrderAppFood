import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import icExit from '../../../icons/exit.png';
import icLogo from '../../../icons/ic_food.png';
import {Actions} from 'react-native-router-flux';
import saveToken from '../../api/saveToken';
import saveTokenDevice from '../../api/saveTokenDevice';
const {height} = Dimensions.get('window');

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null};
  }
  onSignOut() {
    this.setState({user: null});
    saveToken('');
    saveTokenDevice('');
    Actions.login();
  }
  render() {
    const {wrapper, row1, iconStyle, titleStyle} = styles;
    return (
      <View style={wrapper}>
        <View style={row1}>
          <Image source={icLogo} style={iconStyle} />
          <Text style={titleStyle}>Pho Restaurant</Text>
          <TouchableOpacity onPress={() => this.onSignOut()}>
            <Image source={icExit} style={iconStyle} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: height / 12,
    backgroundColor: '#4abfc6',
    padding: 10,
    justifyContent: 'space-around',
  },
  row1: {flexDirection: 'row', justifyContent: 'space-between'},
  titleStyle: {color: '#FFF', fontFamily: 'Avenir', fontSize: 20},
  iconStyle: {width: 30, height: 30},
});
