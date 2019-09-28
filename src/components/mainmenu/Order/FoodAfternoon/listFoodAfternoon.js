import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  CheckBox,
  TouchableOpacity,
  Button,
  TextInput,
  Dimensions,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';
import global from '../../../../global';
import styles from '../../../styles/listStyle';
import HeaderOrderFood from '../headerOrderFood';
import pho from '../../../../img/404-not-found.jpg';
import icPlus from '../../../../icons/plusAdd.png';
import icMinus from '../../../../icons/minusAdd.png';
import ListFoodExcept from '../Food/listFoodExcept';
import ListDrink from '../Food/listDrink';
import saver from '../../../../utils/saver';
import {fetchData} from '../../../../redux/actionCreators/foodAction/listFoodAfternoonAction';
import {fetchDataPostOrderOnlyFood} from '../../../../redux/actionCreators/orderAction/postOrderOnlyFoodAction';
import {fetchData_Table} from '../../../../redux/actionCreators/orderAction/listOrderAction';
import {countCartPlus} from '../../../../redux/actionCreators/countCartAction';
class ListFoodAfternoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countCart: 0,
      arrData: [],
      is_TakeAwayDetail: false,
      note: '',
      FoodName: '',
      isVisible: false,
      idFood: 0,
      countFood: 1,
      countList: 0,
      dataInsert: [],
      dataCart: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    const arr = [];
    if (
      nextProps.mylistFoodAfternoon.type === 'SUCCESS_FETCH_DATA_FOODAFTERNOON'
    ) {
      const {listFoodAfternoon} = nextProps.mylistFoodAfternoon;
      listFoodAfternoon.map(item => {
        item.count = 0;
        arr.push(item);
      });
      this.setState({arrData: arr});
    }
  }
  _keyExtractor = item => item.id;
  componentDidMount() {
    this.props.fetchData();
  }
  onOrder(idCountList) {
    var {listOrderID, listOrderName} = this.props.mylistOrder;
    const {
      dataInsert,
      dataCart,
      idFood,
      countList,
      countFood,
      is_TakeAwayDetail,
      note,
      FoodName,
      countCart,
    } = this.state;
    if (listOrderID === undefined || listOrderName === undefined) {
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
        note: '',
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
        note: '',
      });
      listOrderID = dataInsert;
      listOrderName = dataCart;
    } else {
      listOrderID.push({
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
        note: '',
      });
      listOrderName.push({
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
        note: '',
      });
    }
    listOrderID.map(item => {
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
    });
    listOrderName.map(item => {
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
    });
    this.props.fetchData_Table(listOrderID, listOrderName);
    this.props.countCartPlus();
    this.setState(
      {
        isVisible: !this.state.isVisible,
        //arrData: result,
        countCart: countCart + 1,
      },
      () => console.log('dataInsert =', JSON.stringify(listOrderID)),
    );
  }
  plusPress(id, name) {
    this.setState({
      isVisible: !this.state.isVisible,
      idFood: id,
      countList: this.state.countList + 1,
      is_TakeAwayDetail: false,
      note: '',
      countFood: 1,
      FoodName: name,
    });
  }
  minusPress(id) {}
  plusPressFood() {
    this.setState({countFood: this.state.countFood + 1});
  }
  minusPressFood() {
    this.setState({countFood: this.state.countFood - 1});
  }
  onSubmitOrder() {
    const {listOrderID} = this.props.mylistOrder;
    var rv = {};

    for (var i = 0; i < listOrderID.length; ++i) {
      rv[i] = listOrderID[i];
    }
    this.setState({dataInsert: rv}, () =>
      this.props.fetchDataPostOrderOnlyFood(rv, global.getonSignIn()),
    ); // () => console.log("dataInsert =", JSON.stringify(this.state.dataInsert))
    Actions.pop();
  }
  render() {
    const {width, height} = Dimensions.get('screen');
    return (
      <View style={styles.container}>
        <HeaderOrderFood countCart={this.state.countCart} />
        <View style={styles.wrapper}>
          <FlatList
            data={this.state.arrData}
            renderItem={({item}) => (
              <View style={styles.productContainer}>
                <Image style={styles.productImage} source={pho} />
                <View style={styles.productInfo}>
                  <Text style={styles.txtName}>{item.Name}</Text>
                  <View style={styles.lastRowInfo}>
                    {item.count < 1 ? null : (
                      <TouchableOpacity
                        onPress={() => this.minusPress(item.id)}>
                        <Image source={icMinus} style={styles.icStyle} />
                      </TouchableOpacity>
                    )}
                    {item.count < 1 ? null : (
                      <Text style={styles.txtShowDetail}>{item.count}</Text>
                    )}
                    <TouchableOpacity
                      onPress={() => this.plusPress(item.id, item.Name)}>
                      <Image source={icPlus} style={styles.icStyle} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={this._keyExtractor}
          />
        </View>
        <Button
          title="Đặt ngay"
          onPress={() => this.onSubmitOrder()}
          color="#4abfc6"
          disabled={this.state.dataInsert.length > 0 ? false : true}
        />
        <Modal
          isVisible={this.state.isVisible}
          onBackdropPress={() =>
            this.setState({
              isVisible: false,
              countList: this.state.countList - 1,
            })
          }
          onSwipeComplete={() =>
            this.setState({
              isVisible: false,
              countList: this.state.countList - 1,
            })
          }
          swipeDirection="up">
          <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <View style={{flex: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 10,
                  flex: 1,
                }}>
                <Text style={styles.title}>Số lượng</Text>
                <View style={styles.lastRowInfo}>
                  {this.state.countFood < 2 ? null : (
                    <TouchableOpacity onPress={() => this.minusPressFood()}>
                      <Image source={icMinus} style={styles.icStyle} />
                    </TouchableOpacity>
                  )}
                  <Text style={styles.txtShowDetail}>
                    {this.state.countFood}
                  </Text>

                  <TouchableOpacity onPress={() => this.plusPressFood()}>
                    <Image source={icPlus} style={styles.icStyle} />
                  </TouchableOpacity>
                </View>
              </View>
              {this.state.idFood < 7 ? null : (
                <View style={{flex: 1}}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>Không ăn kèm với</Text>
                  </View>
                  <ListFoodExcept is_Morning={0} />
                </View>
              )}
              {this.state.idFood < 7 ? (
                <View style={{flex: 1}}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title}>Nước giải khát</Text>
                  </View>
                  <ListDrink />
                </View>
              ) : null}
              {this.state.idFood < 7 ? null : (
                <View style={{flexDirection: 'row', padding: 10, flex: 1}}>
                  <Text style={styles.title}>Ghi chú</Text>
                  <TextInput
                    style={{
                      height: height / 10,
                      borderColor: 'gray',
                      borderWidth: 1,
                      width: width / 3,
                      marginLeft: 10,
                    }}
                    onChangeText={note => this.setState({note})}
                    value={this.state.note}
                    multiline
                  />
                  <View style={styles.lastRowInfo}>
                    <CheckBox
                      value={this.state.is_TakeAwayDetail}
                      onChange={() =>
                        this.setState({
                          is_TakeAwayDetail: !this.state.is_TakeAwayDetail,
                        })
                      }
                    />
                    <Text
                      style={{
                        alignSelf: 'center',
                        textAlign: 'center',
                        fontSize: 20,
                        marginRight: 5,
                      }}
                      onPress={() =>
                        this.setState({
                          is_TakeAwayDetail: !this.state.is_TakeAwayDetail,
                        })
                      }>
                      Mang về?
                    </Text>
                  </View>
                </View>
              )}
            </View>

            <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <Button
                title="Xong"
                onPress={() => {
                  this.onOrder(this.state.countList);
                }}
                borderRadius={25}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    mylistFoodAfternoon: state.listFoodAfternoon,
    mylistOrder: state.listOrder,
    mycountCart: state.countCart,
  };
}
export default connect(
  mapStateToProps,
  {fetchData, fetchDataPostOrderOnlyFood, fetchData_Table, countCartPlus},
)(ListFoodAfternoon);
