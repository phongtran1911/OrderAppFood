import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  CheckBox,
  TextInput,
  Dimensions,
  Button,
  ScrollView,
} from 'react-native';
import EditListFoodType from './editListFoodType';
import EditListFoodExcept from './editListFoodExcept';
import EditListBowlType from './editListBowlType';
import EditListFoodAdd from './editListFoodAdd';
import EditListDrink from './editListDrink';
import EditListTable from './editListTable';
import {connect} from 'react-redux';
import {
  fetchDataGetOrderDetail,
  fetchDateGetExceptOrderDetail,
  fetchDateGetTypeOrderDetail,
} from '../../../redux/actionCreators/orderedAction/getOrderedByIDAction';
import {fetchDataPostUpdateOrderDetail} from '../../../redux/actionCreators/orderedAction/postUpdateOrderDetailAction';
import icPlus from '../../../icons/plusAdd.png';
import icMinus from '../../../icons/minusAdd.png';
import styles from '../../styles/listStyle';
import saver from '../../../utils/saver';
import {Actions} from 'react-native-router-flux';
class EditOrdered extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countFood: this.props.Quantity,
      idFood: this.props.idFood,
      arrData: [
        {
          id: 1,
          listFoodID: '',
          listFoodTypeID: '',
          listFoodExceptID: '',
          listBowlTypeID: '',
          listFoodAddID: '',
          listDrinkID: '',
          quantityFood: 0,
          idTable: '',
          is_TakeAwayDetail: false,
          note: '',
        },
      ],
      is_TakeAwayDetail: this.props.isTakeaway,
      note: this.props.Note,
      idBowlType: '',
      idDrink: '',
      idFoodAdd: '',
      idFoodExcept: [],
      idFoodType: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.mygetOrderDetail.type === 'SUCCESS_FETCH_DATA_ORDERDETAIL') {
      const {getOrderDetail} = nextProps.mygetOrderDetail;
      getOrderDetail.map(item => {
        this.setState({
          idBowlType: item.idBowlType,
          idDrink: item.idDrink,
          idFoodAdd: item.idAddFoodType,
        });
      });
    }
    if (
      nextProps.mygetOrderDetail.type === 'SUCCESS_FETCH_DATA_EXCEPTORDERDETAIL'
    ) {
      const {getExceptOrderDetail} = nextProps.mygetOrderDetail;
      const arr = [];
      getExceptOrderDetail.map(item => {
        arr.push({id: item.idFoodExcept});
      });
      this.setState({idFoodExcept: arr});
    }
    if (
      nextProps.mygetOrderDetail.type === 'SUCCESS_FETCH_DATA_TYPEORDERDETAIL'
    ) {
      const {getTypeOrderDetail} = nextProps.mygetOrderDetail;
      const arr1 = [];
      getTypeOrderDetail.map(item => {
        arr1.push({id: item.idFoodType});
      });
      this.setState({idFoodType: arr1});
    }
  }
  componentDidMount() {
    this.props.fetchDataGetOrderDetail(this.props.idOrderDetail);
    this.props.fetchDateGetExceptOrderDetail(this.props.idOrderDetail);
    this.props.fetchDateGetTypeOrderDetail(this.props.idOrderDetail);
    console.log(this.props.idTable);
  }
  plusPressFood() {
    this.setState({countFood: this.state.countFood + 1});
  }
  minusPressFood() {
    this.setState({countFood: this.state.countFood - 1});
  }
  onSubmitOrder() {
    const {idFood, countFood, is_TakeAwayDetail, note, arrData} = this.state;
    arrData.map(item => {
      if (item.id === 1) {
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
        if (saver.getDataTableID() !== undefined) {
          item.idTable = saver.getDataTableID();
        } else {
          item.idTable = this.props.idTable;
        }
        item.quantityFood = countFood;
        item.is_TakeAwayDetail = is_TakeAwayDetail;
        item.note = note;
      }
    });
    var rv = {};

    for (var i = 0; i < arrData.length; ++i) {
      rv[i] = arrData[i];
    }
    this.setState(
      {arrData: rv},
      () =>
        this.props.fetchDataPostUpdateOrderDetail(
          this.state.arrData,
          this.props.idOrderDetail,
        ), //console.log("hihi", JSON.stringify(this.state.arrData) + this.props.idOrderDetail),
      //console.log("hihi", JSON.stringify(this.state.arrData)),
    ); // () =>     this.props.fetchDataPostUpdateOrderDetail(      this.state.arrData,      this.props.idOrderDetail,    ),
    Actions.pop();
  }
  render() {
    const {width, height} = Dimensions.get('screen');
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <Text style={styles.title}>Số lượng</Text>
          <View style={styles.lastRowInfo}>
            {this.state.countFood < 2 ? null : (
              <TouchableOpacity onPress={() => this.minusPressFood()}>
                <Image source={icMinus} style={styles.icStyle} />
              </TouchableOpacity>
            )}
            <Text style={styles.txtShowDetail}>{this.state.countFood}</Text>

            <TouchableOpacity onPress={() => this.plusPressFood()}>
              <Image source={icPlus} style={styles.icStyle} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Bàn</Text>
          </View>
          <EditListTable idTable={this.props.idTable} />
        </View>
        {this.state.idFood > 4 ? (
          this.state.idFood === '5' ? (
            <View style={{flex: 1}}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Món ăn thêm</Text>
              </View>
              <EditListFoodAdd
                idFoodAdd={this.state.idFoodAdd}
                idFoodType={this.state.idFoodType}
              />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Không ăn kèm với</Text>
              </View>
              <EditListFoodExcept
                is_Morning={1}
                idFoodExcept={this.state.idFoodExcept}
              />
            </View>
          ) : this.state.idFood < 7 ? (
            <View style={{flex: 1}}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Nước giải khát</Text>
              </View>
              <EditListDrink idDrink={this.state.idDrink} />
            </View>
          ) : (
            <View style={{flex: 1}}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Không ăn kèm với</Text>
              </View>
              <EditListFoodExcept
                is_Morning={0}
                idFoodExcept={this.state.idFoodExcept}
              />
            </View>
          )
        ) : (
          <View style={{flex: 1}}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Món ăn kèm</Text>
            </View>
            <EditListFoodType
              idFood={this.state.idFood}
              idFoodType={this.state.idFoodType}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Không ăn kèm với</Text>
            </View>
            <EditListFoodExcept
              is_Morning={1}
              idFoodExcept={this.state.idFoodExcept}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Loại tô</Text>
            </View>
            <EditListBowlType idBowlType={this.state.idBowlType} />
          </View>
        )}
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
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Button
            title="Sửa"
            onPress={() => {
              this.onSubmitOrder();
            }}
            borderRadius={25}
          />
        </View>
      </ScrollView>
    );
  }
}
function mapStateToProps(state) {
  return {
    mygetOrderDetail: state.getOrderDetail,
  };
}
export default connect(
  mapStateToProps,
  {
    fetchDataGetOrderDetail,
    fetchDateGetExceptOrderDetail,
    fetchDateGetTypeOrderDetail,
    fetchDataPostUpdateOrderDetail,
  },
)(EditOrdered);
