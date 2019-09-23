import React, {Component} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import bookingIcon from '../../../icons/bookingIcon.png';
import market from '../../../icons/market.png';
import foodIcon from '../../../icons/FoodIcon.png';
import serviceIcon from '../../../icons/serviceIcon.png';
export default class Category extends Component {
  render() {
    const {wrapper, imageStyle} = styles;
    return (
      <View style={wrapper}>
        <View style={styles.serviceTitle}>
          <Image source={serviceIcon} style={imageStyle} />
          <Text style={styles.textStyle}>Food</Text>
        </View>
        <View style={styles.serviceTitle}>
          <Image source={bookingIcon} style={imageStyle} />
          <Text style={styles.textStyle}>Booking</Text>
        </View>
        <View style={styles.serviceTitle}>
          <Image source={market} style={imageStyle} />
          <Text style={styles.textStyle}>Market</Text>
        </View>
        <View style={styles.serviceTitle}>
          <Image source={foodIcon} style={imageStyle} />
          <Text style={styles.textStyle}>Services</Text>
        </View>
      </View>
    );
  }
}
const imageWidth = 45;
const imageHeight = 45;

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
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Avenir',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: imageHeight,
    width: imageWidth,
    borderRadius: 10,
  },
  cateTitle: {
    fontSize: 20,
    fontFamily: 'Avenir',
    color: '#FFF',
    fontWeight: 'bold',
  },
  serviceTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
