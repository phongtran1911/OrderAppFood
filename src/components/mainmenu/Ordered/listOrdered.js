import React, {Component} from 'react';
import {View, FlatList, Text, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../../../redux/actionCreators/orderedAction/listOrderedAction';
import styles from '../../styles/listStyle';
import icEdit from '../../../icons/edit.png';
import icConfirm from '../../../icons/confirm.png';
import icTrash from '../../../icons/trash.png';
import {
  fetchDataUpdateStatusOrdered,
  fetchDataDeleteOrderDetail,
} from '../../../redux/actionCreators/orderedAction/postOrderedAction';
import {Actions} from 'react-native-router-flux';
class ListOrdered extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }
  componentDidMount() {
    this.props.fetchData();
  }
  onUpdateStatus(id) {
    this.props.fetchDataUpdateStatusOrdered(id);
  }
  onDeleteOrderDetail(idOrder, idOrdered) {
    this.props.fetchDataDeleteOrderDetail(idOrder, idOrdered);
  }
  _keyExtractor = item => item.id;
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <FlatList
            data={this.props.mylistOrdered.listOrdered}
            renderItem={({item}) => (
              <View style={styles.productContainer}>
                <View style={styles.productInfo}>
                  <Text style={styles.txtName}>
                    {item.Mon + '-' + item.LoaiTo + '-' + item.Ban}
                  </Text>
                  <Text style={styles.txtPrice}>
                    {item.LoaiMon +
                      ' ' +
                      item.KhongLay +
                      item.MonThem +
                      item.Nuoc}
                  </Text>
                  <Text style={styles.txtMaterial}>
                    {'Số tiền: ' + item.Tien + ' Số lượng: ' + item.SoLuong}
                  </Text>
                  {item.MangVe !== 'Tại Bàn' ? (
                    <Text style={styles.txtPrice}>{item.MangVe}</Text>
                  ) : null}
                </View>
                <View style={styles.lastRowInfoList}>
                  {item.idDelivery > 1 ? null : (
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity
                        onPress={() => this.onUpdateStatus(item.id)}>
                        <Image source={icConfirm} style={styles.icStyle} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          Actions.push('editordered', {
                            idOrderDetail: item.id,
                            idFood: item.idFood,
                            Note: item.GhiChu,
                            idTable: item.idTable,
                            Quantity: item.SoLuong,
                            isTakeaway:
                              item.MangVe !== 'Tại Bàn' ? true : false,
                          })
                        }>
                        <Image source={icEdit} style={styles.icStyle} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() =>
                          this.onDeleteOrderDetail(item.idOrder, item.id)
                        }>
                        <Image source={icTrash} style={styles.icStyle} />
                      </TouchableOpacity>
                    </View>
                  )}
                  <Text style={{color: 'red'}}>
                    {'Trạng thái: ' + item.TrangThai}
                  </Text>
                  <Text>{item.NguoiDat + ', ' + item.NgayTao}</Text>
                </View>
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
    mylistOrdered: state.listOrdered,
  };
}
export default connect(
  mapStateToProps,
  {
    fetchData,
    fetchDataUpdateStatusOrdered,
    fetchDataDeleteOrderDetail,
  },
)(ListOrdered);
