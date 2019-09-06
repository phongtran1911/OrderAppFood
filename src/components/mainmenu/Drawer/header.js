import React, { Component } from 'react';
import { 
    View, Text, TouchableOpacity, Image, Dimensions, StyleSheet 
} from 'react-native';
import icMenu from '../../../icons/ic_menu.png'
import icLogo from '../../../icons/ic_food.png'
const { height } = Dimensions.get('window');

export default class Header extends Component{
    render(){
        const { wrapper, row1, iconStyle, titleStyle } = styles;
        return(
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Ordering Foods</Text>
                    <Image source={icLogo} style={iconStyle} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: { 
        height: height / 12, 
        backgroundColor: '#4abfc6', 
        padding: 10, 
        justifyContent: 'space-around' 
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
    iconStyle: { width: 30, height: 30 }
});