import React, {Component} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../../../redux/actionCreators/orderedAction/listOrderedAction';
import {fetchDataTableOrdered} from '../../../redux/actionCreators/orderedAction/listTableOrderedAction';
import styles from '../../styles/mainStyle';
import icEdit from '../../../icons/edit.png';
import icConfirm from '../../../icons/confirm.png';
import icTrash from '../../../icons/trash.png';
import {
  fetchDataUpdateStatusOrdered,
  fetchDataDeleteOrderDetail,
} from '../../../redux/actionCreators/orderedAction/postOrderedAction';
import {fetchDataUpdateStatusMainOrder} from '../../../redux/actionCreators/orderedAction/postUpdateOrderDetailAction';
import {Actions} from 'react-native-router-flux';
class ListOrdered extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.fetchData(this.props.idOrder);
  }
  onUpdateStatus(id, idOrder) {
    this.props.fetchDataUpdateStatusOrdered(id, idOrder);
  }
  onDeleteOrderDetail(idOrder, idOrdered) {
    this.props.fetchDataDeleteOrderDetail(idOrder, idOrdered);
    if (this.props.mylistOrdered.listOrdered.length <= 1) {
      Actions.pop();
      this.props.fetchDataTableOrdered();
    }
  }
  onSubmitOrder(idOrder) {
    this.props.fetchDataUpdateStatusMainOrder(idOrder);
    if (this.props.mypostUpdateOrderDetail.errorUpdateOrderDetail === true) {
      alert('Vẫn còn món ăn chưa làm!');
      return;
    }
    Actions.pop();
    this.props.fetchDataTableOrdered();
  }
  _keyExtractor = item => item.id;
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <FlatList
            data={this.props.mylistOrdered.listOrdered}
            renderItem={({item}) => (
              <View style={{flex: 1}}>
                <View style={styles.productContainer}>
                  <View style={styles.productInfo}>
                    <Text style={styles.txtName}>
                      {item.Mon + ' ' + item.LoaiMon}
                    </Text>
                    {item.idDelivery > 1 ? null : (
                      <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                          onPress={() =>
                            this.onUpdateStatus(item.id, item.idOrder)
                          }>
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
                  </View>
                  <View style={styles.productInfo}>
                    <Text style={styles.txtPrice}>
                      {item.LoaiTo +
                        ' ' +
                        item.KhongLay +
                        ' ' +
                        item.Ban +
                        ' ' +
                        item.MonThem +
                        ' ' +
                        item.Nuoc}
                    </Text>
                  </View>
                  <View style={styles.productInfo}>
                    <Text style={styles.txtPrice}>
                      {'Số tiền: ' + item.Tien + ' Số lượng: ' + item.SoLuong}
                    </Text>
                  </View>
                  <View style={styles.productInfo}>
                    {item.MangVe !== 'Tại Bàn' ? (
                      <Text style={styles.txtPrice}>{item.MangVe + ' '}</Text>
                    ) : null}
                    <Text style={{color: 'red'}}>
                      {'Trạng thái: ' + item.TrangThai}
                    </Text>
                  </View>
                  <View style={styles.productInfo}>
                    <Text>{item.NguoiDat + ', ' + item.NgayTao}</Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={this._keyExtractor}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: '#FFF',
          }}>
          <Button
            title="Đã xong"
            onPress={() => {
              this.onSubmitOrder(this.props.idOrder);
            }}
          />
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    mylistOrdered: state.listOrdered,
    mypostUpdateOrderDetail: state.postUpdateOrderDetail,
  };
}
export default connect(
  mapStateToProps,
  {
    fetchData,
    fetchDataUpdateStatusOrdered,
    fetchDataDeleteOrderDetail,
    fetchDataUpdateStatusMainOrder,
    fetchDataTableOrdered,
  },
)(ListOrdered);
