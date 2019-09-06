import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, FlatList
} from 'react-native';
import Modal from 'react-native-modal'
import { Actions } from 'react-native-router-flux'
import icBack from '../../../icons/back_white.png'
import icCart from '../../../icons/cart.png'
import styles from '../../styles/listStyle'
import pho from './../../../img/404-not-found.jpg';
const { height } = Dimensions.get('window');
export default class HeaderOrderFood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisibleCart: false,
            arrData: []
        }
    }
    onShow() {
        const { arrData } = this.state;
        const { dataCart } = this.props;
        for(var i = 0; i < dataCart.length; i++)
        {
            arrData.push(dataCart[i]);
        }
    }
    render() {
        const { wrapper, row1, iconStyle, titleStyle, countItemStyle } = styles1;
        return (
            <View style={wrapper}>
                <View style={row1}>
                    <TouchableOpacity onPress={() => Actions.pop()}>
                        <Image source={icBack} style={iconStyle} />
                    </TouchableOpacity>
                    <Text style={titleStyle}>Đặt món ăn</Text>
                    <TouchableOpacity onPress={() => {
                        this.onShow()
                        this.setState({ isVisibleCart: !this.state.isVisibleCart })
                    }
                    }>
                        <View style={countItemStyle}>
                            <Text style={{ color: '#FFF', fontWeight: 'bold' }}>{this.props.countCart}</Text>
                        </View>
                        <Image source={icCart} style={iconStyle} />
                    </TouchableOpacity>

                </View>
                <Modal isVisible={this.state.isVisibleCart}
                    onBackdropPress={() => this.setState({ isVisibleCart: false,arrData: [] })}
                    onSwipeComplete={() => this.setState({ isVisibleCart: false,arrData: [] })}
                    swipeDirection="left"
                >
                    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Danh sách món ăn</Text>
                        </View>
                        <FlatList
                            data={this.state.arrData}
                            renderItem={({ item }) =>
                                <View style={styles.productContainer}>
                                    <Image style={styles.productImage} source={pho} />
                                    <View style={styles.productInfo}>
                                        {item.listFoodName === 'Món thêm' ? <Text style={styles.txtName}>{item.listFoodAddName}</Text> : item.listFoodName === "Nước giải khát" ? <Text style={styles.txtName}>{item.listDrinkName}</Text> : <Text style={styles.txtName}>{item.listFoodName}</Text>}
                                        <Text style={styles.txtMaterial}>{item.listFoodTypeName + " - " + item.listFoodExceptName}</Text>
                                        {item.note !== "" ? <Text style={styles.txtMaterial}>{item.note}</Text> : null}
                                        <Text style={styles.txtMaterial}>{item.listBowlTypeName + " - " + item.TableName}</Text>
                                        {item.is_TakeAwayDetail === true ? <Text style={styles.txtPrice}>Mang về</Text> : null}                                        

                                        <View style={styles.lastRowInfo}>
                                            <Text style={styles.txtShowDetail}>Số lượng :</Text>
                                            <Text style={styles.txtShowDetail}>{item.quantityFood}</Text>
                                        </View>
                                    </View>
                                </View>
                            }
                            keyExtractor={(item) => item.id}
                        />
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles1 = StyleSheet.create({
    wrapper: {
        height: height / 15,
        backgroundColor: '#4abfc6',
        padding: 10,
        justifyContent: 'space-around',
        zIndex: 2000
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between' },
    titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 20 },
    iconStyle: { width: 30, height: 30 },
    countItemStyle: {
        position: 'absolute',
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: 'rgba(95,197,123,0.8)',
        right: 15,
        bottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000
    },
});