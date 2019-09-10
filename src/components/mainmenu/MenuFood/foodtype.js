import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import * as listFoodTypeAction from '../../../redux/actionCreators/foodtypeAction/listFoodTypeAction';
import MenuHeader from '../MenuFood/menuheader';
import FoodTypeAdd from './foodtypecrud/foodtypeadd';
import FoodTypeList from './foodtypelist';

class FoodType extends Component {
  _keyExtractor = item => item.id;

  componentDidMount() {
    const {paramID} = this.props;
    this.props.fetchDataListFoodType(paramID);
  }

  render() {
    const {paramID} = this.props;
    return (
      <View style={{backgroundColor: '#f1f8ff', flex: 1}}>
        <MenuHeader />
        <View style={{flex: 10}}>
          {this.props.myIsAdding ? <FoodTypeAdd idFood={paramID} /> : null}
          <FlatList
            data={this.props.myListFoodType.listFoodType}
            renderItem={({item}) => (
              <FoodTypeList myFoodType={item} myFoodID={paramID} />
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
    myIsAdding: state.isAdding,
    myListFoodType: state.listFoodType,
  };
}

export default connect(
  mapStateToProps,
  listFoodTypeAction,
)(FoodType);
