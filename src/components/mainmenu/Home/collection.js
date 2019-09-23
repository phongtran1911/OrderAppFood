import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import phoIC from '../../../img/pho1.jpg';
import phoIC1 from '../../../img/pho2.jpg';
import phoIC2 from '../../../img/pho3.jpg';
import phoIC3 from '../../../img/pho4.jpg';
const {width, height} = Dimensions.get('window');

class Collection extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Swiper
          style={styles.wrapper}
          height={height / 3.5}
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#000',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3,
              }}
            />
          }
          paginationStyle={{
            bottom: -23,
            left: null,
            right: 10,
          }}
          loop>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
            }>
            <Image resizeMode="stretch" style={styles.image} source={phoIC} />
          </View>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
            }>
            <Image resizeMode="stretch" style={styles.image} source={phoIC1} />
          </View>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Why Stone split from Garfield</Text>
            }>
            <Image resizeMode="stretch" style={styles.image} source={phoIC2} />
          </View>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
            }>
            <Image resizeMode="stretch" style={styles.image} source={phoIC3} />
          </View>
        </Swiper>
      </View>
    );
  }
}
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    margin: 10,
    justifyContent: 'space-between',
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    flex: 1,
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    width,
    flex: 1,
  },
});

export default Collection;
