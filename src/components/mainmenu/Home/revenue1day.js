import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import morningIcon from '../../../icons/morning.png';
import afternoonIcon from '../../../icons/afternoon.png';
import {getMorningRevenue, getAfternoonRevenue} from '../../api/getRevenue';
class Revenue1Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      morningMoney: 0,
      afternoonMoney: 0,
    };
  }
  async componentDidMount() {
    const moneyMorning = await getMorningRevenue()
      .then(result => {
        return result[0].Total;
      })
      .catch(err => console.log(err));
    const moneyAfternoon = await getAfternoonRevenue()
      .then(result => {
        return result[0].Total;
      })
      .catch(err => console.log(err));
    this.setState({morningMoney: moneyMorning, afternoonMoney: moneyAfternoon});
  }
  async onPressMorning() {
    const moneyMorning = await getMorningRevenue()
      .then(result => {
        return result[0].Total;
      })
      .catch(err => console.log(err));
    this.setState({morningMoney: moneyMorning});
  }
  async onPressAfternoon() {
    const moneyAfternoon = await getAfternoonRevenue()
      .then(result => {
        return result[0].Total;
      })
      .catch(err => console.log(err));
    this.setState({afternoonMoney: moneyAfternoon});
  }
  currencyFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  }
  render() {
    const {wrapper, imageStyle} = styles;
    return (
      <View style={styles.container}>
        <View style={wrapper}>
          <View style={styles.serviceTitle}>
            <Text style={styles.textStyle}>Buổi sáng</Text>
            <TouchableOpacity onPress={() => this.onPressMorning()}>
              <Image source={morningIcon} style={imageStyle} />
            </TouchableOpacity>
            <Text style={styles.moneyStyle}>
              {this.currencyFormat(parseInt(this.state.morningMoney, 10))}
            </Text>
          </View>
        </View>
        <View style={wrapper}>
          <View style={styles.serviceTitle}>
            <Text style={styles.textStyle}>Buổi chiều</Text>
            <TouchableOpacity onPress={() => this.onPressAfternoon()}>
              <Image source={afternoonIcon} style={imageStyle} />
            </TouchableOpacity>
            <Text style={styles.moneyStyle}>
              {this.currencyFormat(parseInt(this.state.afternoonMoney, 10))}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default Revenue1Day;
const imageWidth = 45;
const imageHeight = 45;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
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
  moneyStyle: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Avenir',
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
