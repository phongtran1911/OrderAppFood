import React, {Component} from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import bannerPho from '../../../img/pho1.jpg';
import bannerBoKho from '../../../img/pho3.jpg';
import bannerBunBo from '../../../img/pho2.jpg';
import bannerBanhMi from '../../../img/pho4.jpg';
const {width} = Dimensions.get('window');
export default class Category extends Component {
  render() {
    const {wrapper, imageStyle} = styles;
    return (
      <View style={wrapper}>
        <Swiper showsPagination width={imageWidth} height={imageHeight}>
          <Image source={bannerPho} style={imageStyle} />
          <Image source={bannerBunBo} style={imageStyle} />
          <Image source={bannerBoKho} style={imageStyle} />
          <Image source={bannerBanhMi} style={imageStyle} />
        </Swiper>
      </View>
    );
  }
}
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#FFF',
    margin: 10,
    justifyContent: 'space-between',
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    padding: 10,
    flex: 1,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 20,
    color: '#AFAEAF',
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cateTitle: {
    fontSize: 20,
    fontFamily: 'Avenir',
    color: '#FFF',
    fontWeight: 'bold',
  },
});
