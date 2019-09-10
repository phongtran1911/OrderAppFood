import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import * as listFoodAction from '../../../redux/actionCreators/foodAction/listFoodAction';
import MenuFood from './menufood';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  _keyExtractor = item => item.id;
  getListFoodMessage() {
    const {mylistFood} = this.props;
    if (mylistFood.isLoading) return '...Loading';
    if (mylistFood.error)
      return 'Không lấy được dữ liệu do kết nối mạng có vấn đề!';
    return true;
  }
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <View style={{backgroundColor: '#f1f8ff', flex: 1}}>
        {this.getListFoodMessage() == true ? null : (
          <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>
            {this.getListFoodMessage()}
          </Text>
        )}
        <FlatList
          data={this.props.mylistFood.listFood}
          renderItem={({item}) => <MenuFood myFood={item} />}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    mylistFood: state.listFood,
  };
}

export default connect(
  mapStateToProps,
  listFoodAction,
)(Menu);
