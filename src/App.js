import React, {Component} from 'react';
import PushController from './pushController';
import {Provider} from 'react-redux';
import {StatusBar, BackHandler, Alert} from 'react-native';
import {Router, Scene, Actions} from 'react-native-router-flux';
import Login from './components/login/login';
import ForgotPass from './components/login/forgotpass';
import Main from './components/mainmenu/main';
import ChangeInfo from './components/info/changeinfo';
import OrderHistory from './components/info/orderhistory';
import Revenue from './components/info/revenue';
import FoodType from './components/mainmenu/MenuFood/foodtype';
import FoodTypeEdit from './components/mainmenu/MenuFood/foodtypecrud/foodtypeedit';
import ListFoodOrder from './components/mainmenu/Order/Food/listFood';
import ListFoodAfternoon from './components/mainmenu/Order/FoodAfternoon/listFoodAfternoon';
import Order from './components/mainmenu/Order/order';
import EditOrdered from './components/mainmenu/Ordered/editOrdered';
import ListOrdered from './components/mainmenu/Ordered/listOrdered';
import store from './redux/store';
import getToken from './components/api/getToken';
import global from './global';

StatusBar.setHidden(true);
export default class Index extends Component {
  async componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    const user_id = await getToken();
    if (user_id !== '' && user_id !== null) {
      global.setonSignIn(user_id);
      Actions.replace('mainmenu');
      return;
    }
    Actions.replace('login');
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  handleBackPress = () => {
    switch (Actions.currentScene) {
      case 'mainmenu':
        Alert.alert(
          'Exit App',
          'Exiting the application?',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => BackHandler.exitApp(),
            },
          ],
          {
            cancelable: false,
          },
        );
        break;

      default:
        Actions.pop();
    }

    return true;
  };
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="mainmenu" component={Main} hideNavBar />
            <Scene key="login" component={Login} hideNavBar />
            <Scene key="forgotpass" component={ForgotPass} />
            <Scene
              key="orderhistory"
              component={OrderHistory}
              title="Lịch sử gọi món"
            />
            <Scene
              key="changeinfo"
              component={ChangeInfo}
              title="Thay đổi thông tin"
            />
            <Scene
              key="revenue"
              component={Revenue}
              title="Doanh thu hôm nay"
            />
            <Scene key="foodtype" component={FoodType} hideNavBar />
            <Scene
              key="foodtypeedit"
              component={FoodTypeEdit}
              title="Sửa tên món"
            />
            <Scene
              key="listfoodorder"
              component={ListFoodOrder}
              title="Đặt món ăn"
              hideNavBar
            />
            <Scene key="order" component={Order} hideNavBar />
            <Scene
              key="listfoodorderafternoon"
              component={ListFoodAfternoon}
              hideNavBar
            />
            <Scene
              key="editordered"
              component={EditOrdered}
              title="Sửa món ăn"
            />
            <Scene
              key="listtableordered"
              component={ListOrdered}
              title="Món ăn đã đặt"
            />
          </Scene>
        </Router>
        <PushController />
      </Provider>
    );
  }
}
