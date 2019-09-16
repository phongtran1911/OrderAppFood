import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  CheckBox,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import {fetchDataUpdateFoodType} from '../../../../redux/actionCreators/foodtypeAction/postFoodTypeAction';
const {width} = Dimensions.get('window');
class FoodTypeEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: this.props.Name,
      is_FoodAdd: this.props.is_FoodAdd === 'False' ? false : true,
    };
  }
  onUpdate() {
    const {idFoodType, idFood} = this.props;
    this.props.fetchDataUpdateFoodType(
      this.state.Name,
      this.state.is_FoodAdd,
      idFoodType,
      idFood,
    );
    alert('Thành công!');
    Actions.pop();
  }
  render() {
    console.log(this.state.is_FoodAdd);
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.Name}
          onChangeText={text => this.setState({Name: text})}
          placeholder="Tên món"
        />
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            value={this.state.is_FoodAdd}
            onChange={() => this.setState({is_FoodAdd: !this.state.is_FoodAdd})}
          />
          <Text
            style={{alignSelf: 'center', textAlign: 'center'}}
            onPress={() => this.setState({is_FoodAdd: !this.state.is_FoodAdd})}>
            Có thêm vào món thêm?
          </Text>
        </View>
        <TouchableOpacity
          onPress={this.onUpdate.bind(this)}
          style={styles.buttonAdd}>
          <Text
            style={{
              textAlign: 'center',
              color: '#FFF',
              fontSize: 16,
              padding: 5,
            }}>
            Sửa
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const buttonWidth = width - 40;
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: width - 40,
    backgroundColor: '#46b6a6',
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 25,
    fontSize: 16,
    color: '#FFF',
  },
  buttonAdd: {
    backgroundColor: '#4abfc6',
    borderRadius: 25,
    textAlign: 'center',
    width: buttonWidth / 3,
    height: buttonWidth / 10,
  },
});
export default connect(
  null,
  {fetchDataUpdateFoodType},
)(FoodTypeEdit);
