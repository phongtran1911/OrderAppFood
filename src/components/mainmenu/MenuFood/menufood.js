import React, { Component } from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
const { width } = Dimensions.get('window');
class MenuFood extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { id, Name } = this.props.myFood;
        const {container, btnTextFood,btnFoodStyle} = styles;
        return (
            <View style={container}>
                <TouchableOpacity style={btnFoodStyle} onPress={()=> Actions.push("foodtype",{paramID:id})}>
                    <Text style={btnTextFood}>{Name}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const styles = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        flex: 1,
        borderRadius: 10,
        alignItems: 'center'  
    },
    btnTextFood: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        fontWeight: '700'
    },
    btnFoodStyle: {
        height: 50,
        backgroundColor: '#0396FF',
        borderRadius: 25,
        width: 300,
        justifyContent: 'center',
        //paddingLeft: 10
    },
})
export default MenuFood;