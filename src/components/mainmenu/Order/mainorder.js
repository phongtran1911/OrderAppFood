import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import phoIC from '../../../icons/phoIcon.png';
import Star from '../../../icons/star.png';
import beefIC from '../../../icons/beefIcon.png';
import getToken from '../../api/getToken';
import getTokenDevice from '../../api/getTokenDevice';
import postUpdateTokenDevice from '../../api/postUpdateTokenDevice';
import global from '../../../global';
const {width, height} = Dimensions.get('window');
class MainOrder extends Component {
  async componentDidMount() {
    const user_id = await getToken();
    var id = '';
    if (user_id !== '' && user_id !== null) {
      id = user_id;
    } else {
      id = global.setonSignIn();
    }
    const token = await getTokenDevice();
    postUpdateTokenDevice(id, token)
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(err => console.log(err));
  }
  render() {
    const {
      wrapper,
      textStyle,
      imageStyle,
      viewImage,
      textChildStyle,
      imageChildStyle,
    } = styles;
    return (
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <Text style={{flex: 1}} />
        <TouchableOpacity
          style={styles.wrapper}
          onPress={() => Actions.push('order', {is_Morning: true})}>
          <View style={viewImage}>
            <Image source={beefIC} style={imageStyle} />
          </View>

          <View style={{justifyContent: 'center', flex: 2, marginLeft: 20}}>
            <Text style={textStyle}>Phở</Text>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Image source={Star} style={imageChildStyle} />
              <Image source={Star} style={imageChildStyle} />
              <Image source={Star} style={imageChildStyle} />
              <Image source={Star} style={imageChildStyle} />
              <Image source={Star} style={imageChildStyle} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={textChildStyle}>Tái nạm</Text>
              <Text style={textChildStyle}>Trứng</Text>
              <Text style={textChildStyle}>Bò viên</Text>
              <Text style={textChildStyle}>Thập cẩm</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={wrapper}
          onPress={() => Actions.push('order', {is_Morning: false})}>
          <View style={viewImage}>
            <Image source={phoIC} style={imageStyle} />
          </View>

          <View style={{justifyContent: 'center', flex: 2, marginLeft: 20}}>
            <Text style={textStyle}>Bún thịt nướng</Text>
            <View style={{flexDirection: 'row', marginBottom: 5}}>
              <Image source={Star} style={imageChildStyle} />
              <Image source={Star} style={imageChildStyle} />
              <Image source={Star} style={imageChildStyle} />
              <Image source={Star} style={imageChildStyle} />
              <Image source={Star} style={imageChildStyle} />
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={textChildStyle}>Thịt nướng</Text>
              <Text style={textChildStyle}>Chả giò</Text>
            </View>
          </View>
        </TouchableOpacity>
        <Text style={{flex: 1}} />
      </View>
    );
  }
}
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#0396FF',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    flex: 1,
    flexDirection: 'row',
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 20,
    color: '#FFF',
  },
  imageStyle: {
    height: imageHeight / 3,
    width: imageWidth / 5,
  },
  viewImage: {
    flex: 1,
    borderRadius: 50,
    backgroundColor: '#FFF',
    margin: 10,
    width: width / 4,
    height: height / 6.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textChildStyle: {
    backgroundColor: '#fff',
    marginRight: 5,
    color: '#0396FF',
    borderRadius: 5,
    fontSize: 12,
    textAlign: 'center',
    justifyContent: 'center',
  },
  imageChildStyle: {
    width: width / 24,
    height: height / 50,
  },
});
export default MainOrder;
