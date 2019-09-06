import React, { Component } from 'react';
import { View, Text, FlatList, Image, CheckBox, TouchableOpacity, Button, TextInput, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import HeaderOrderFood from '../headerOrderFood';
import Modal from 'react-native-modal';
import ListFoodType from './listFoodType';
import ListFoodExcept from './listFoodExcept';
import ListBowlType from './listBowlType';
import ListFoodAdd from './listFoodAdd';
import ListDrink from './listDrink';
import { connect } from 'react-redux';
import { fetchData } from '../../../../redux/actionCreators/foodAction/listFoodAction';
import { fetchDataPostOrderOnlyFood } from '../../../../redux/actionCreators/orderAction/postOrderOnlyFoodAction';
import pho from '../../../../img/404-not-found.jpg';
import icPlus from '../../../../icons/plusAdd.png';
import icMinus from '../../../../icons/minusAdd.png';
import styles from '../../../styles/listStyle';
import saver from '../../../../utils/saver';
import global from '../../../../global';
class ListFoodOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrData: [],
            isVisible: false,
            idFood: 0,
            countFood: 1,
            countList: 0,
            dataInsert: [],
            dataCart: [],
            //is_TakeAway: false,
            is_TakeAwayDetail: false,
            note: "",
            countCart: 0,
            FoodName: ''
        };
    }
    componentWillReceiveProps(nextProps) {
        const arr = [];
        if (nextProps.mylistFood.type === "SUCCESS_FETCH_DATA_FOOD") {
            const { listFood } = nextProps.mylistFood;
            listFood.map(item => {
                item.count = 0
                arr.push(item)
            })
            this.setState({ arrData: arr })
        }
    }

    _keyExtractor = (item) => item.id;
    onOrder(idCountList) {
        const { dataInsert, dataCart, idFood, countList, countFood, is_TakeAwayDetail, note, FoodName, countCart } = this.state;
        const result = []
        this.state.arrData.map(item => {
            if (item.id === idFood) {
                item.count = item.count + 1
            }
            result.push(item)
        })
        dataInsert.push({
            id: countList,
            listFoodID: '',
            listFoodTypeID: '',
            listFoodExceptID: '',
            listBowlTypeID: '',
            listFoodAddID: '',
            listDrinkID: '',
            quantityFood: 0,
            idTable: this.props.idTable,
            is_TakeAwayDetail: false,
            note: ''
        });

        dataCart.push({
            id: countList,
            listFoodName: '',
            listFoodTypeName: '',
            listFoodExceptName: '',
            listBowlTypeName: '',
            listFoodAddName: '',
            listDrinkName: '',
            quantityFood: 0,
            TableName: this.props.TableName,
            is_TakeAwayDetail: false,
            note: ''
        })
        dataInsert.map(item => {
            if (item.id === idCountList) {
                item.listFoodID = idFood;
                if (saver.getDataFoodTypeID() !== undefined) {
                    item.listFoodTypeID = saver.getDataFoodTypeID();
                }
                if (saver.getDataFoodExceptID() !== undefined) {
                    item.listFoodExceptID = saver.getDataFoodExceptID();
                }
                if (saver.getDataBowlTypeID() !== undefined) {
                    item.listBowlTypeID = saver.getDataBowlTypeID();
                }
                if (saver.getDataFoodAddID() !== undefined) {
                    item.listFoodAddID = saver.getDataFoodAddID();
                }
                if (saver.getDataDrinkID() !== undefined) {
                    item.listDrinkID = saver.getDataDrinkID();
                }
                item.quantityFood = countFood;
                item.is_TakeAwayDetail = is_TakeAwayDetail;
                item.note = note;
            }
        })
        dataCart.map(item => {
            if (item.id === idCountList) {
                item.listFoodName = FoodName;
                if (saver.getDataFoodTypeName() !== undefined) {
                    item.listFoodTypeName = saver.getDataFoodTypeName();
                }
                if (saver.getDataFoodExceptName() !== undefined) {
                    item.listFoodExceptName = saver.getDataFoodExceptName();
                }
                if (saver.getDataBowlTypeName() !== undefined) {
                    item.listBowlTypeName = saver.getDataBowlTypeName();
                }
                if (saver.getDataFoodAddName() !== undefined) {
                    item.listFoodAddName = saver.getDataFoodAddName();
                }
                if (saver.getDataDrinkName() !== undefined) {
                    item.listDrinkName = saver.getDataDrinkName();
                }
                item.quantityFood = countFood;
                item.is_TakeAwayDetail = is_TakeAwayDetail;
                item.note = note;
            }
        })
        this.setState({ isVisible: !this.state.isVisible, arrData: result, countCart: countCart + 1 }, () => console.log("dataInsert =", JSON.stringify(this.state.dataInsert)));
    }
    plusPress(id, name) {
        this.setState({
            isVisible: !this.state.isVisible,
            idFood: id,
            countList: this.state.countList + 1,
            is_TakeAwayDetail: false,
            note: '',
            countFood: 1,
            FoodName: name
        });
    }
    minusPress(id) {
        const result = []
        this.state.arrData.map(item => {
            if (item.id === id) {
                if (item.count > 0) {
                    item.count = item.count - 1
                }
            }
            result.push(item)
        })
        this.setState({ arrData: result });
    }
    plusPressFood() {
        this.setState({ countFood: this.state.countFood + 1 });
    }
    minusPressFood() {
        this.setState({ countFood: this.state.countFood - 1 });
    }
    componentDidMount() {
        this.props.fetchData();
    }
    onSubmitOrder() {
        const { dataInsert } = this.state;
        var rv = {};

        for (var i = 0; i < dataInsert.length; ++i) {
            rv[i] = dataInsert[i];
        }
        this.setState({ dataInsert: rv }, () => this.props.fetchDataPostOrderOnlyFood(this.state.dataInsert, global.getonSignIn())); // () => console.log("dataInsert =", JSON.stringify(this.state.dataInsert))
        Actions.pop();
    }
    render() {
        const { width, height } = Dimensions.get('screen');
        return (
            <View style={styles.container}>
                <HeaderOrderFood countCart={this.state.countCart} dataCart={this.state.dataCart} />
                <View style={styles.wrapper}>
                    <FlatList
                        data={this.state.arrData}
                        renderItem={({ item }) =>
                            <View style={styles.productContainer}>
                                <Image style={styles.productImage} source={pho} />
                                <View style={styles.productInfo}>
                                    <Text style={styles.txtName}>{item.Name}</Text>
                                    {item.id > 4 ? null :
                                        <View>
                                            <Text style={styles.txtPrice}>25000 - 35000 - 45000</Text>
                                            <Text style={styles.txtMaterial}>Tô nhỏ, lớn, đặc biệt</Text>
                                        </View>
                                    }
                                    <View style={styles.lastRowInfo}>
                                        {
                                            item.count < 1 ? null :
                                                <TouchableOpacity onPress={() => this.minusPress(item.id)}>
                                                    <Image source={icMinus} style={styles.icStyle} />
                                                </TouchableOpacity>
                                        }
                                        {item.count < 1 ? null : <Text style={styles.txtShowDetail}>{item.count}</Text>}
                                        <TouchableOpacity onPress={() => this.plusPress(item.id, item.Name)}>
                                            <Image source={icPlus} style={styles.icStyle} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        }
                        keyExtractor={this._keyExtractor}
                    />
                </View>
                <Button title="Đặt ngay" onPress={() => this.onSubmitOrder()} color="#4abfc6"></Button>

                <Modal isVisible={this.state.isVisible}
                    onBackdropPress={() => this.setState({ isVisible: false, countList: this.state.countList - 1 })}
                    onSwipeComplete={() => this.setState({ isVisible: false, countList: this.state.countList - 1 })}
                    swipeDirection="up"
                >
                    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
                        <View style={{ flex: 10 }}>
                            <View style={{ flex: 9 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                                    <Text style={styles.title}>Số lượng</Text>
                                    <View style={styles.lastRowInfo}>
                                        {
                                            this.state.countFood < 2 ? null :
                                                <TouchableOpacity onPress={() => this.minusPressFood()}>
                                                    <Image source={icMinus} style={styles.icStyle} />
                                                </TouchableOpacity>
                                        }
                                        <Text style={styles.txtShowDetail}>{this.state.countFood}</Text>

                                        <TouchableOpacity onPress={() => this.plusPressFood()}>
                                            <Image source={icPlus} style={styles.icStyle} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                {this.state.idFood > 4 ? null :
                                    <View style={{ flex: 1 }}>
                                        <View style={styles.titleContainer}>
                                            <Text style={styles.title}>Món ăn kèm</Text>
                                        </View>
                                        <View style={{ flex: 3.5 }}>
                                            <ListFoodType idFood={this.state.idFood} />
                                        </View>

                                        <View style={styles.titleContainer}>
                                            <Text style={styles.title}>Không ăn kèm với</Text>
                                        </View>
                                        <View style={{ flex: 2.5 }}>
                                            <ListFoodExcept is_Morning={1} />
                                        </View>
                                        <View style={styles.titleContainer}>
                                            <Text style={styles.title}>Loại tô</Text>
                                        </View>
                                        <ListBowlType />
                                    </View>
                                }
                                {this.state.idFood > 5 ?
                                    <View style={{ flex: 1 }}>
                                        <View style={styles.titleContainer}>
                                            <Text style={styles.title}>Nước giải khát</Text>
                                        </View>
                                        <ListDrink />
                                    </View> : null

                                }
                                {this.state.idFood === '5' ?
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flex: 2 }}>
                                            <View style={styles.titleContainer}>
                                                <Text style={styles.title}>Món ăn thêm</Text>
                                            </View>
                                            <ListFoodAdd />
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <View style={styles.titleContainer}>
                                                <Text style={styles.title}>Không ăn kèm với</Text>
                                            </View>
                                            <ListFoodExcept is_Morning={1}/>
                                        </View>

                                    </View> : null
                                }
                            </View>
                            {this.state.idFood > 5 ? null :
                                <View style={{ flexDirection: 'row', padding: 10, flex: 1 }}>
                                    <Text style={styles.title}>Ghi chú</Text>
                                    <TextInput
                                        style={{ height: height / 10, borderColor: 'gray', borderWidth: 1, width: width / 3, marginLeft: 10 }}
                                        onChangeText={(note) => this.setState({ note })}
                                        value={this.state.note}
                                        multiline
                                    />
                                    <View style={styles.lastRowInfo}>
                                        <CheckBox value={this.state.is_TakeAwayDetail} onChange={() => this.setState({ is_TakeAwayDetail: !this.state.is_TakeAwayDetail })} />
                                        <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 20, marginRight: 5 }} onPress={() => this.setState({ is_TakeAwayDetail: !this.state.is_TakeAwayDetail })}>Mang về?</Text>
                                    </View>
                                </View>
                            }


                        </View>

                        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                            <Button title="Xong" onPress={() => { this.onOrder(this.state.countList) }} borderRadius={25} ></Button>
                        </View>

                    </View>
                </Modal>

            </View>
        );
    }
}
function mapStateToProps(state) {
    return {
        mylistFood: state.listFood,
        mylistFoodType: state.listFoodType,
        mylistPostOnlyFood: state.postOrderOnlyFood
    };
}
export default connect(mapStateToProps, { fetchData, fetchDataPostOrderOnlyFood })(ListFoodOrder);