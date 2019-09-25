import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {connect} from 'react-redux';
import {toggleIsAdding} from '../../../redux/actionCreators/isAddingAction';
import {Actions} from 'react-native-router-flux';
import icBack from '../../../icons/back_white.png';
import icPlus from '../../../icons/plus.png';
import icMinus from '../../../icons/minus.png';
class MenuHeader extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={() => Actions.pop()}>
          <Image style={styles.buttonImage} source={icBack} />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>
          Món ăn đi kèm
        </Text>
        <TouchableOpacity onPress={() => this.props.toggleIsAdding()}>
          <Image
            style={styles.buttonImage}
            source={this.props.myIsAdding ? icMinus : icPlus}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    myIsAdding: state.isAdding,
  };
}

export default connect(
  mapStateToProps,
  {toggleIsAdding},
)(MenuHeader);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#4abfc6',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  buttonImage: {
    height: 30,
    width: 30,
  },
});
