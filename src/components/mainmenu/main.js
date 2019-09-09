import React, {Component} from 'react';
import Drawer from 'react-native-drawer';
import MainTabNavigator from './mainTabNavigator';
import MainDrawer from '../mainmenu/Drawer/mainDrawer';
export default class Main extends Component {
  closeControlPanel = () => {
    this._drawer.close();
  };
  openControlPanel = () => {
    this._drawer.open();
  };
  render() {
    return (
      <Drawer
        ref={ref => (this._drawer = ref)}
        content={<MainDrawer />}
        tapToClose={true}
        openDrawerOffset={0.3} // 20% gap on the right side of drawer
      >
        <MainTabNavigator open={this.openControlPanel.bind(this)} />
      </Drawer>
    );
  }
}
