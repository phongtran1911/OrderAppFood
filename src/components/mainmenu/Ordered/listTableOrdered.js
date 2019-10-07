import React, {Component} from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {fetchDataTableOrdered} from '../../../redux/actionCreators/orderedAction/listTableOrderedAction';
import styles from '../../styles/mainStyle';
import {Actions} from 'react-native-router-flux';
class ListTableOrdered extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }
  componentDidMount() {
    this.props.fetchDataTableOrdered();
  }
  _keyExtractor = item => item.id;
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <FlatList
            data={this.props.mylistTableOrdered.listTableOrdered}
            renderItem={({item}) => (
              <View style={{flex: 1}}>
                <TouchableOpacity
                  style={styles.productContainer}
                  disabled={item.TrangThai === 'Đang làm' ? false : true}
                  onPress={() =>
                    Actions.push('listtableordered', {idOrder: item.id})
                  }>
                  <View style={styles.productInfo}>
                    <Text style={styles.txtShowDetail}>{item.Ban}</Text>
                  </View>
                  <View style={styles.productInfo}>
                    <Text style={styles.txtName}>{item.Mon}</Text>
                  </View>
                  <View style={styles.productInfo}>
                    <Text style={styles.txtPrice}>
                      {'Tổng tiền: ' + item.TongTien}
                    </Text>
                  </View>
                  <View style={styles.productInfo}>
                    <Text style={{color: 'red'}}>
                      {'Trạng thái: ' + item.TrangThai}
                    </Text>
                  </View>
                  <View style={styles.productInfo}>
                    <Text>{item.NgayTao}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            onRefresh={() => {
              this.setState({refreshing: true});
              this.props.fetchData();
              this.setState({refreshing: false});
            }}
            refreshing={this.state.refreshing}
            keyExtractor={this._keyExtractor}
          />
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    mylistTableOrdered: state.listTableOrdered,
  };
}
export default connect(
  mapStateToProps,
  {
    fetchDataTableOrdered,
  },
)(ListTableOrdered);
