import React, {Component} from 'react';
import {View, Text, FlatList, CheckBox} from 'react-native';
import {connect} from 'react-redux';
import {fetchDataListFoodType} from '../../../redux/actionCreators/foodtypeAction/listFoodTypeAction';
import saver from '../../../utils/saver';
class EditListFoodType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      arrData: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    const arr = [];
    const resultID = [];
    const resultName = [];
    if (nextProps.mylistFoodType.type === 'SUCCESS_FETCH_DATA_FOODTYPE') {
      const {listFoodType} = nextProps.mylistFoodType;
      listFoodType.map(item => {
        item.checked = false;
        arr.push(item);
      });
      this.setState({arrData: arr}, () => {
        if (this.props.idFoodType.length > 0) {
          this.state.arrData.map(item => {
            this.props.idFoodType.forEach(element => {
              if (element.id === item.id) {
                item.checked = true;
                resultID.push({id: item.id});
                resultName.push(item.Name);
              }
              var rv = {};
              for (var i = 0; i < resultID.length; ++i) {
                rv[i] = resultID[i];
              }
              saver.setDataFoodTypeID(rv, resultName);
            });
          });
        }
      });
    }
  }
  _keyExtractor = item => item.id;
  componentDidMount() {
    this.props.fetchDataListFoodType(this.props.idFood);
    saver.setDataFoodTypeID(undefined, undefined);
    saver.setDataDrinkID(undefined, undefined);
    saver.setDataFoodAddID(undefined, undefined);
  }
  onChecked(id) {
    const result = [];
    this.state.arrData.map(item => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      result.push(item);
    });
    this.listCheckedFoodType(result);
  }
  listCheckedFoodType(result) {
    const resultID = [];
    const resultName = [];
    result.map(item => {
      if (item.checked === true) {
        resultID.push({id: item.id});
        resultName.push(item.Name);
      }
    });
    var rv = {};
    for (var i = 0; i < resultID.length; ++i) {
      rv[i] = resultID[i];
    }
    this.setState({}, () => saver.setDataFoodTypeID(rv, resultName));
  }
  render() {
    return (
      <FlatList
        data={this.state.arrData}
        contentContainerStyle={{flexDirection: 'column', flex: 1}}
        numColumns={3}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row', width: '33.3%'}}>
            <CheckBox
              value={item.checked}
              onValueChange={() => {
                this.onChecked(item.id);
              }}
            />
            <Text
              style={{alignSelf: 'center', textAlign: 'center', fontSize: 15}}
              onPress={() => this.onChecked(item.id)}>
              {item.Name}
            </Text>
          </View>
        )}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}
function mapStateToProps(state) {
  return {
    mylistFoodType: state.listFoodType,
  };
}
export default connect(
  mapStateToProps,
  {fetchDataListFoodType},
)(EditListFoodType);
