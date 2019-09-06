import React, { Component } from 'react';
import { View, Text, FlatList, CheckBox } from 'react-native';
import { connect } from 'react-redux';
import { fetchDataFoodExcept } from '../../../../redux/actionCreators/foodAction/listFoodExceptAction';
import saver from '../../../../utils/saver';
class ListFoodExcept extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            arrData: [],
        };
    }
    componentWillReceiveProps(nextProps) {
        const arr = [];
        if (nextProps.mylistFoodExcept.type === "SUCCESS_FETCH_DATA_FOODEXCEPT") {
            const { listFoodExcept } = nextProps.mylistFoodExcept;
            listFoodExcept.map(item => {
                item.checked = false
                arr.push(item)
            })
            this.setState({ arrData: arr });
        }
    }
    _keyExtractor = (item) => item.id;
    componentDidMount() {
        this.props.fetchDataFoodExcept(this.props.is_Morning);
        saver.setDataFoodExceptID(undefined,undefined);
    }
    onChecked(id) {
        const result = []
        this.state.arrData.map(item => {
            if (item.id === id) {
                item.checked = !item.checked;
            }
            result.push(item)
        })
        this.setState({ arrData: result });
        this.listCheckedFoodExcept(result);
    }
    listCheckedFoodExcept(result){
        const resultID = []
        const resultName = []
        result.map(item => {
            if(item.checked === true)
            {
                resultID.push({id: item.id});
                resultName.push(item.Name);
            }
        })
        var rv = {};
        for (var i = 0; i < resultID.length; ++i)
        {
            rv[i] = resultID[i];
        }
        this.setState({}, ()=> saver.setDataFoodExceptID(rv,resultName));
    }
    render() {
        return (
            <FlatList
                data={this.state.arrData}
                contentContainerStyle={{flexDirection:'column',flex:1 }}
                numColumns={3}
                renderItem={({ item }) =>
                    <View style={{flexDirection:'row', width: "33.3%" }}>
                        <CheckBox value={item.checked}
                            onValueChange={() => {this.onChecked(item.id)}}
                        />
                        <Text style={{alignSelf:'center',textAlign:'center', fontSize: 15}} onPress={() => this.onChecked(item.id)}>{item.Name}</Text>
                    </View>
                }
                keyExtractor={this._keyExtractor}
            />
        );
    }
}
function mapStateToProps(state) {
    return {
        mylistFoodExcept: state.listFoodExcept
    };
}
export default connect(mapStateToProps, { fetchDataFoodExcept })(ListFoodExcept);