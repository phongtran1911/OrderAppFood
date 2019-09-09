import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from '../../../redux/actionCreators/orderedAction/listOrderedAction';
import styles from '../../styles/listStyle';
class ListOrdered extends Component {
  componentDidMount() {
    this.props.fetchData();
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
                  <Text style={styles.txtName}>{item.Mon + "-" + item.LoaiTo + "-" + item.Ban}</Text>                  
                  <Text style={styles.txtPrice}>{item.LoaiMon + " " + item.KhongLay + item.MonThem + item.Nuoc}</Text>
                  <Text style={styles.txtMaterial}>{"Số tiền: " + item.Tien + " Số lượng: " + item.SoLuong}</Text>
                  {item.MangVe !== "Tại Bàn" ? <Text style={styles.txtPrice}>{item.MangVe}</Text> : null}
                </View>
                <View style={styles.lastRowInfoList}>
                  <Text style={{color: "red"}}>{"Trạng thái: " + item.TrangThai}</Text>
                  <Text>{item.NguoiDat + ", " + item.NgayTao}</Text>
                </View>
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
    mylistOrdered: state.listOrdered,
  };
}
export default connect(
  mapStateToProps,
  {fetchData},
)(ListOrdered);
