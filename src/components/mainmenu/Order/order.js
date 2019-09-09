import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {fetchData_Table} from '../../../redux/actionCreators/orderAction/listTableAction';
import TableList from './tablelist';
import HeaderOrderFood from './headerOrderFood';
class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countCart: 0,
    };
  }
  _keyExtractor = item => item.id;
  getListTableMessage() {
    const {mylistTable} = this.props;
    if (mylistTable.isLoading) return '...Đang tải dữ liệu';
    if (mylistTable.error)
      return 'Không lấy được dữ liệu do kết nối mạng có vấn đề!';
    return true;
  }
  componentDidMount() {
    this.props.fetchData_Table();
  }
  render() {
    return (
      <View style={{backgroundColor: '#FFF', flex: 1}}>
        <HeaderOrderFood countCart={this.state.countCart} />
        {this.getListTableMessage() == true ? null : (
          <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>
            {this.getListTableMessage()}
          </Text>
        )}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>CHỌN BÀN</Text>
        </View>
        <FlatList
          contentContainerStyle={{
            flexDirection: 'column',
            justifyContent: 'space-around',
            paddingBottom: 10,
            alignItems: 'space-between',
          }}
          numColumns={2}
          data={this.props.mylistTable.listTable}
          renderItem={({item}) => (
            <TableList listTable={item} is_morning={this.props.is_Morning} />
          )}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 10,
    backgroundColor: '#FFF',
  },
  title: {
    color: '#c8c8c8',
    fontSize: 20,
    textAlign: 'center',
  },
});

function mapStateToProps(state) {
  return {
    mylistTable: state.listTable,
  };
}

export default connect(
  mapStateToProps,
  {fetchData_Table},
)(Order);
