import React, {Component} from 'react';
import {View, Text, FlatList, CheckBox} from 'react-native';
import {connect} from 'react-redux';
import {fetchData_Drink} from '../../../redux/actionCreators/orderAction/listDrinkAction';
import saver from '../../../utils/saver';
class EditListDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrData: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    const arr = [];
    if (nextProps.mylistDrink.type === 'SUCCESS_FETCH_DATA_DRINK') {
      const {listDrink} = nextProps.mylistDrink;
      listDrink.map(item => {
        item.checked = false;
        arr.push(item);
      });
      this.setState({arrData: arr});
    }
  }
  _keyExtractor = item => item.id;
  componentDidMount() {
    this.props.fetchData_Drink();
    saver.setDataDrinkID(undefined, undefined);
    saver.setDataFoodAddID(undefined, undefined);
    saver.setDataFoodExceptID(undefined, undefined);
    saver.setDataFoodTypeID(undefined, undefined);
    saver.setDataBowlTypeID(undefined, undefined);
  }
  onChecked(id) {
    const result = [];
    this.state.arrData.map(item => {
      item.checked = false;
      if (item.id === id) {
        item.checked = !item.checked;
      }
      result.push(item);
    });
    this.setState({arrData: result});
    this.listCheckDrink(result);
  }
  listCheckDrink(result) {
    const resultID = [];
    const resultName = [];
    result.map(item => {
      if (item.checked === true) {
        resultID.push({id: item.id, total: item.Price});
        resultName.push(item.Name);
      }
    });
    var rv = {};
    for (var i = 0; i < resultID.length; ++i) {
      rv[i] = resultID[i];
    }
    this.setState({}, () => saver.setDataDrinkID(rv, resultName));
  }
  render() {
    return (
      <View style={{flex: 1}}>
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
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    mylistDrink: state.listDrink,
  };
}
export default connect(
  mapStateToProps,
  {fetchData_Drink},
)(EditListDrink);
