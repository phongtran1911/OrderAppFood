import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import icTable from '../../../icons/restaurant-table.png';
class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {id, Name} = this.props.listTable;
    return (
      <View style={styles.container}>
        {this.props.is_morning == true ? (
          <TouchableOpacity
            style={styles.tableContainer}
            onPress={() =>
              Actions.push('listfoodorder', {idTable: id, TableName: Name})
            }>
            <Image style={styles.imageTable} source={icTable} />
            <Text style={styles.txtName}>{Name}</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.tableContainer}
            onPress={() =>
              Actions.push('listfoodorderafternoon', {
                idTable: id,
                TableName: Name,
              })
            }>
            <Image style={styles.imageTable} source={icTable} />
            <Text style={styles.txtName}>{Name}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}
const {width} = Dimensions.get('window');
const produtWidth = (width - 40) / 2;
const styles = StyleSheet.create({
  container: {
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  tableContainer: {
    width: produtWidth,
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  txtName: {
    marginVertical: 5,
    textAlign: 'center',
    fontFamily: 'Avenir',
    color: '#c8c8c8',
    fontWeight: 'bold',
  },
  imageTable: {
    marginLeft: produtWidth / 4,
  },
});
export default TableList;
