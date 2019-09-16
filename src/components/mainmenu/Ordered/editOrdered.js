import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  CheckBox,
  TextInput,
  Dimensions,
} from 'react-native';
import EditListFoodType from './editListFoodType';
import EditListFoodExcept from './editListFoodExcept';
import EditListBowlType from './editListBowlType';
import EditListFoodAdd from './editListFoodAdd';
import EditListDrink from './editListDrink';
import {connect} from 'react-redux';
import {fetchDataGetOrderDetail} from '../../../redux/actionCreators/orderedAction/getOrderedByIDAction';
import icPlus from '../../../icons/plusAdd.png';
import icMinus from '../../../icons/minusAdd.png';
import styles from '../../styles/listStyle';

class EditOrdered extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countFood: 0,
      idFood: this.props.idFood,
      arrData: [],
      is_TakeAwayDetail: this.props.isTakeaway,
      note: this.props.Note,
    };
  }
  componentWillReceiveProps(nextProps) {
    const arr = [];
    if (nextProps.mygetOrderDetail.type === 'SUCCESS_FETCH_DATA_ORDERDETAIL') {
      const {getOrderDetail} = nextProps.mygetOrderDetail;
      getOrderDetail.map(item => {
        this.setState({countFood: item.Quantity});
        arr.push(item);
      });
      this.setState({arrData: arr}, () => console.log(this.state.idFood));
    }
  }
  componentDidMount() {
    this.props.fetchDataGetOrderDetail(this.props.idOrderDetail);
  }
  plusPressFood() {
    this.setState({countFood: this.state.countFood + 1});
  }
  minusPressFood() {
    this.setState({countFood: this.state.countFood - 1});
  }
  render() {
    const {width, height} = Dimensions.get('screen');
    return (
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
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
        {this.state.idFood > 4 ? (
          this.state.idFood === '5' ? (
            <View style={{flex: 1}}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Món ăn thêm</Text>
              </View>
              <EditListFoodAdd />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Không ăn kèm với</Text>
              </View>
              <EditListFoodExcept is_Morning={1} />
            </View>
          ) : this.state.idFood < 7 ? (
            <View style={{flex: 1}}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>Nước giải khát</Text>
              </View>
              <EditListDrink />
            </View>
          ) : null
        ) : (
          <View style={{flex: 1}}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Món ăn kèm</Text>
            </View>
            <EditListFoodType idFood={this.state.idFood} />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Không ăn kèm với</Text>
            </View>
            <EditListFoodExcept is_Morning={1} />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Loại tô</Text>
            </View>
            <EditListBowlType />
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
      </View>
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
  },
)(EditOrdered);
