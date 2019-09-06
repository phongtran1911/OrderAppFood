import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from '../mainmenu/Home/home';
import MainOrder from './Order/mainorder';
import Ordered from './Ordered/ordered';
import Menu from './MenuFood/menu';
import Header from '../mainmenu/Drawer/header';
class MainTabNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        }
    }	
    openMenu() {
        const { open } = this.props;
        open();
    }
    render() {
        const { iconStyle } = styles;
        return (
            <View style={{ flex: 1 }}>
                <Header onOpen={this.openMenu.bind(this)}/>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Trang chủ"
                        renderIcon={() => <Image source={require('../../icons/home0.png')} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={require('../../icons/home.png')} style={iconStyle} />}                        
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        titleStyle={styles.titleStyle}
                        selectedTitleStyle={styles.selectedTitleStyle}
                    >
                        {<Home />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'order'}
                        title="Gọi món"
                        renderIcon={() => <Image source={require('../../icons/shopping-cart0.png')} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={require('../../icons/shopping-cart.png')} style={iconStyle} />}                        
                        onPress={() => this.setState({ selectedTab: 'order' })}
                        titleStyle={styles.titleStyle}
                        selectedTitleStyle={styles.selectedTitleStyle}
                    >
                        {<MainOrder />}
                    </TabNavigator.Item>                    
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'ordered'}
                        title="Đã gọi món"
                        renderIcon={() => <Image source={require('../../icons/order0.png')} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={require('../../icons/order.png')} style={iconStyle} />}
                        badgeText="5"
                        onPress={() => this.setState({ selectedTab: 'ordered' }) }
                        titleStyle={styles.titleStyle}
                        selectedTitleStyle={styles.selectedTitleStyle}
                    >
                        {<Ordered />}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'menu'}
                        title="Thực đơn"
                        renderIcon={() => <Image source={require('../../icons/menu0.png')} style={iconStyle} />}
                        renderSelectedIcon={() => <Image source={require('../../icons/menu.png')} style={iconStyle} />}
                        onPress={() => this.setState({ selectedTab: 'menu' })}
                        titleStyle={styles.titleStyle}
                        selectedTitleStyle={styles.selectedTitleStyle}
                    >
                        {<Menu />}
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    iconStyle: {
        width: 25, height: 25
    },
    titleStyle: {
        fontSize: 12,
        fontWeight: '300',
        fontFamily: 'Avenir'
    },
    selectedTitleStyle: {
        color: '#4d4db0',
        fontSize: 12,
        fontWeight: '300',
        fontFamily: 'Avenir'
    }
});

export default MainTabNavigator;