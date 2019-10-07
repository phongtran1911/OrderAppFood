import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {Actions} from 'react-native-router-flux';
import icBack from '../../../icons/back_white.png';
import icCart from '../../../icons/cart.png';
import icTrash from '../../../icons/trash.png';
import styles from '../../styles/listStyle';
import icPlus from '../../../icons/plusAdd.png';
import icMinus from '../../../icons/minusAdd.png';
import pho from './../../../img/404-not-found.jpg';
import {connect} from 'react-redux';
import {fetchData_Table} from '../../../redux/actionCreators/orderAction/listOrderAction';
import {
  countCartMinus,
  countCartBack,
} from '../../../redux/actionCreators/countCartAction';
const {height} = Dimensions.get('window');
class HeaderOrderFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleCart: false,
      arrData: [],
    };
  }
  onShow() {
    const {arrData} = this.state;
    const {listOrderName} = this.props.mylistOrder;
    if (listOrderName !== null && listOrderName !== undefined) {
      for (var i = 0; i < listOrderName.length; i++) {
        arrData.push(listOrderName[i]);
      }
    }
  }
  _keyExtractor = item => item.id;
  onBack() {
    this.props.fetchData_Table(null, null);
    this.props.countCartBack();
    Actions.pop();
  }
  onDelete(id) {
    const {listOrderID, listOrderName} = this.props.mylistOrder;
    const resultID = [];
    const resultName = [];
    var dataID = listOrderName.findIndex(x => x.id == id);
    var dataIDMain = listOrderID.findIndex(x => x.id == id);
    listOrderID.splice(dataIDMain, 1);
    listOrderName.splice(dataID, 1);
    resultID.push(...listOrderID);
    resultName.push(...listOrderName);
    this.props.fetchData_Table(resultID, resultName);
    this.props.countCartMinus();
    this.setState({arrData: resultName});
  }
  plusPressFood(id) {
    const {listOrderID, listOrderName} = this.props.mylistOrder;
    const resultID = [];
    const resultName = [];
    listOrderID.map(item => {
      if (item.id === id) {
        item.quantityFood = item.quantityFood + 1;
      }
      resultID.push(item);
    });
    listOrderName.map(item => {
      if (item.id === id) {
        item.quantityFood = item.quantityFood + 1;
      }
      resultName.push(item);
    });
    this.setState({arrData: resultName});
    this.props.fetchData_Table(resultID, resultName);
  }
  minusPressFood(id) {
    const {listOrderID, listOrderName} = this.props.mylistOrder;
    const resultID = [];
    const resultName = [];
    listOrderID.map(item => {
      if (item.id === id) {
        if (item.quantityFood > 1) {
          item.quantityFood = item.quantityFood - 1;
        }
      }
      resultID.push(item);
    });
    listOrderName.map(item => {
      if (item.id === id) {
        if (item.quantityFood > 1) {
          item.quantityFood = item.quantityFood - 1;
        }
      }
      resultName.push(item);
    });
    this.setState({arrData: resultName});
    this.props.fetchData_Table(resultID, resultName);
  }
  render() {
    const {wrapper, row1, iconStyle, titleStyle, countItemStyle} = styles1;
    return (
      <View style={wrapper}>
        <View style={row1}>
          <TouchableOpacity onPress={() => this.onBack()}>
            <Image source={icBack} style={iconStyle} />
          </TouchableOpacity>
          <Text style={titleStyle}>Đặt món ăn</Text>
          <TouchableOpacity
            onPress={() => {
              this.onShow();
              this.setState({isVisibleCart: !this.state.isVisibleCart});
            }}>
            <View style={countItemStyle}>
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>
                {this.props.mycountCart}
              </Text>
            </View>
            <Image source={icCart} style={iconStyle} />
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={this.state.isVisibleCart}
          onBackdropPress={() =>
            this.setState({isVisibleCart: false, arrData: []})
          }
          onSwipeComplete={() =>
            this.setState({isVisibleCart: false, arrData: []})
          }
          swipeDirection="left">
          <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Danh sách món ăn</Text>
            </View>
            {this.state.arrData.length > 0 ? null : (
              <Text style={styles.txtShowDetail}>
                Chưa chọn món, vui lòng chọn món!
              </Text>
            )}
            <FlatList
              data={this.state.arrData}
              renderItem={({item}) => (
                <View style={styles.productContainer}>
                  <Image style={styles.productImage} source={pho} />
                  <View style={styles.productInfo}>
                    {item.listFoodName === 'Món thêm' ? (
                      <Text style={styles.txtName}>{item.listFoodAddName}</Text>
                    ) : item.listFoodName === 'Nước giải khát' ? (
                      <Text style={styles.txtName}>{item.listDrinkName}</Text>
                    ) : (
                      <Text style={styles.txtName}>{item.listFoodName}</Text>
                    )}
                    <Text style={styles.txtMaterial}>
                      {item.listFoodTypeName + ' - ' + item.listFoodExceptName}
                    </Text>
                    {item.note !== '' ? (
                      <Text style={styles.txtMaterial}>{item.note}</Text>
                    ) : null}
                    <Text style={styles.txtMaterial}>
                      {item.listBowlTypeName + ' - ' + item.TableName}
                    </Text>
                    {item.is_TakeAwayDetail === true ? (
                      <Text style={styles.txtPrice}>Mang về</Text>
                    ) : null}
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'baseline',
                      }}>
                      {this.state.countFood < 2 ? null : (
                        <TouchableOpacity
                          onPress={() => this.minusPressFood(item.id)}>
                          <Image source={icMinus} style={styles.icStyle} />
                        </TouchableOpacity>
                      )}
                      <Text style={styles.txtShowDetail}>
                        {item.quantityFood}
                      </Text>

                      <TouchableOpacity
                        onPress={() => this.plusPressFood(item.id)}>
                        <Image source={icPlus} style={styles.icStyle} />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.lastRowInfo}>
                      {/* <Text style={styles.txtShowDetail}>
                        Số lượng : {item.quantityFood}
                      </Text> */}
                      <TouchableOpacity onPress={() => this.onDelete(item.id)}>
                        <Image source={icTrash} style={styles.icStyle} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={this._keyExtractor}
            />
          </View>
        </Modal>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    mylistOrder: state.listOrder,
    mycountCart: state.countCart,
  };
}
export default connect(
  mapStateToProps,
  {fetchData_Table, countCartMinus, countCartBack},
)(HeaderOrderFood);
const styles1 = StyleSheet.create({
  wrapper: {
    height: height / 15,
    backgroundColor: '#4abfc6',
    padding: 10,
    justifyContent: 'space-around',
    zIndex: 2000,
  },
  row1: {flexDirection: 'row', justifyContent: 'space-between'},
  titleStyle: {color: '#FFF', fontFamily: 'Avenir', fontSize: 20},
  iconStyle: {width: 30, height: 30},
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
    zIndex: 2000,
  },
});
