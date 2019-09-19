import React, {Component} from 'react';
import {View, Text, FlatList, CheckBox} from 'react-native';
import {connect} from 'react-redux';
import {fetchDataFoodAdd} from '../../../redux/actionCreators/foodAction/listFoodAddAction';
import {fetchDataFoodAddUse} from '../../../redux/actionCreators/foodAction/listFoodAddUseAction';
import styles from '../../styles/listStyle';
import saver from '../../../utils/saver';
class EditListFoodAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrData: [],
      arrDataFoodAddUse: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    const arr = [];
    const arr1 = [];
    const resultID = [];
    const resultName = [];
    const resultID1 = [];
    const resultName1 = [];
    if (nextProps.mylistFoodAdd.type === 'SUCCESS_FETCH_DATA_FOODADD') {
      const {listFoodAdd} = nextProps.mylistFoodAdd;
      listFoodAdd.map(item => {
        item.checked = false;
        arr.push(item);
      });
      this.setState({arrData: arr}, () => {
        this.state.arrData.map(item => {
          if (item.id === this.props.idFoodAdd) {
            item.checked = true;
            resultID.push({id: item.id, total: item.Price});
            resultName.push(item.Name);
          }
          var rv = {};
          for (var i = 0; i < resultID.length; ++i) {
            rv[i] = resultID[i];
          }
          saver.setDataFoodAddID(rv, resultName);
        });
      });
    }
    if (nextProps.mylistFoodAddUse.type === 'SUCCESS_FETCH_DATA_FOODADD_USE') {
      const {listFoodAddUse} = nextProps.mylistFoodAddUse;
      listFoodAddUse.map(item => {
        item.checked = false;
        arr1.push(item);
      });
      this.setState({arrDataFoodAddUse: arr1}, () => {
        if (this.props.idFoodType.length > 0) {
          this.state.arrDataFoodAddUse.map(item => {
            this.props.idFoodType.forEach(element => {
              if (element.id === item.id) {
                item.checked = true;
                resultID1.push({id: item.id});
                resultName1.push(item.Name);
              }
              var rv1 = {};
              for (var i = 0; i < resultID1.length; ++i) {
                rv1[i] = resultID1[i];
              }
              saver.setDataFoodTypeID(rv1, resultName1);
            });
          });
        }
      });
    }
  }
  _keyExtractor = item => item.id;
  componentDidMount() {
    this.props.fetchDataFoodAdd();
    this.props.fetchDataFoodAddUse();
    saver.setDataFoodAddID(undefined, undefined);
    saver.setDataFoodExceptID(undefined, undefined);
    saver.setDataFoodTypeID(undefined, undefined);
    saver.setDataDrinkID(undefined, undefined);
    saver.setDataBowlTypeID(undefined, undefined);
  }
  onCheckedFoodAdd(id) {
    const result = [];
    this.state.arrData.map(item => {
      item.checked = false;
      if (item.id === id) {
        item.checked = !item.checked;
      }
      result.push(item);
    });
    this.setState({arrData: result});
    this.listCheckFoodAdd(result);
  }
  listCheckFoodAdd(result) {
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
    this.setState({}, () => saver.setDataFoodAddID(rv, resultName));
  }
  onCheckedFoodAddUse(id) {
    const result = [];
    this.state.arrDataFoodAddUse.map(item => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      result.push(item);
    });
    this.setState({arrDataFoodAddUse: result});
    this.listCheckFoodAddUse(result);
  }
  listCheckFoodAddUse(result) {
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
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.arrData}
          contentContainerStyle={{flexDirection: 'column', flex: 1}}
          numColumns={3}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row', width: '33.3%'}}>
              <CheckBox
                value={item.checked}
                onValueChange={() => this.onCheckedFoodAdd(item.id)}
              />
              <Text
                style={{alignSelf: 'center', textAlign: 'center'}}
                onPress={() => this.onCheckedFoodAdd(item.id)}>
                {item.Name}
              </Text>
            </View>
          )}
          keyExtractor={this._keyExtractor}
        />
        <View style={{flex: 2}}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Chén thêm</Text>
          </View>
          <FlatList
            data={this.state.arrDataFoodAddUse}
            contentContainerStyle={{flexDirection: 'column', flex: 1}}
            numColumns={3}
            renderItem={({item}) => (
              <View style={{flexDirection: 'row', width: '33.3%'}}>
                <CheckBox
                  value={item.checked}
                  onValueChange={() => this.onCheckedFoodAddUse(item.id)}
                />
                <Text
                  style={{alignSelf: 'center', textAlign: 'center'}}
                  onPress={() => this.onCheckedFoodAddUse(item.id)}>
                  {item.Name}
                </Text>
              </View>
            )}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    mylistFoodAdd: state.listFoodAdd,
    mylistFoodAddUse: state.listFoodAddUse,
  };
}
export default connect(
  mapStateToProps,
  {fetchDataFoodAdd, fetchDataFoodAddUse},
)(EditListFoodAdd);
