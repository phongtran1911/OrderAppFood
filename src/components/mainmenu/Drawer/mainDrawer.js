import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import global from '../../../global';
import profileIcon from '../../../icons/profile.png';
import saveToken from '../../api/saveToken';
import styles from '../../styles/listStyle';
class MainDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null};
  }
  onSignOut() {
    this.setState({user: null});
    saveToken('');
    Actions.login();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.productContainer}>
            <View style={styles.productInfo}>
              <Text
                style={styles.txtName}
                onPress={() => Actions.orderhistory()}>
                Lịch sử gọi món
              </Text>
              <Text style={styles.txtName} onPress={() => Actions.changeinfo()}>
                Thay đổi thông tin
              </Text>
              <Text style={styles.txtName} onPress={() => Actions.revenue()}>
                Doanh thu hôm nay
              </Text>
              <Text style={styles.txtName} onPress={() => this.onSignOut()}>
                Đăng xuất
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    borderRightWidth: 3,
    borderColor: '#fff',
    alignItems: 'center',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 60,
    marginVertical: 30,
  },
  btnStyle: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 70,
  },
  btnText: {
    color: '#34B089',
    fontFamily: 'Avenir',
    fontSize: 20,
  },
  btnSignInStyle: {
    height: 50,
    backgroundColor: '#55bbc4',
    borderRadius: 25,
    width: 200,
    marginBottom: 10,
    justifyContent: 'center',
    //paddingLeft: 10
  },
  btnTextSignIn: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '700',
  },
  loginContainer: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  username: {
    color: '#fff',
    fontFamily: 'Avenir',
    fontSize: 15,
  },
  textSignOut: {
    color: '#fff',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});

export default MainDrawer;
