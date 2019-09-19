import React, {Component} from 'react';
import {View, Picker} from 'react-native';
import {connect} from 'react-redux';
import {fetchData_Table} from '../../../redux/actionCreators/orderAction/listTableAction';
import saver from '../../../utils/saver';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countCart: 0,
      idTable: this.props.idTable,
      arrData: [],
    };
  }
  componentWillReceiveProps(nextProps) {
    const arr = [];
    if (nextProps.mylistTable.type === 'SUCCESS_FETCH_DATA_Table') {
      const {listTable} = nextProps.mylistTable;
      listTable.map(item => {
        arr.push(item);
      });
      this.setState({arrData: arr});
    }
  }
  componentDidMount() {
    this.props.fetchData_Table();
  }
  onSeletedChange(idTable) {
    const result = [];
    result.push({id: idTable});
    var rv = {};
    for (var i = 0; i < result.length; ++i) {
      rv[i] = result[i];
    }
    saver.setDataTableID(rv[0].id);
    this.setState({idTable: idTable}, () => console.log("idTable", saver.getDataTableID()));
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Picker
          selectedValue={this.state.idTable}
          onValueChange={idTable => this.onSeletedChange(idTable)}>
          {this.state.arrData.map(v => {
            return <Picker.Item label={v.Name} value={v.id} />;
          })}
        </Picker>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    mylistTable: state.listTable,
  };
}

export default connect(
  mapStateToProps,
  {fetchData_Table},
)(Order);
