import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet,CheckBox } from 'react-native';
import { connect } from 'react-redux';
import { fetchDataFoodAddUse } from '../../../../redux/actionCreators/foodAction/listFoodAddUseAction';
import saver from '../../../../utils/saver';
class ListFoodAddUse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedFoodAddUse: false,
            arrDataFoodAddUse: [],
            countFood: 0
        };
    }
    componentWillReceiveProps(nextProps) {
        const arrFoodAddUse = [];
        if (nextProps.mylistFoodAddUse.type === "SUCCESS_FETCH_DATA_FOODADD_USE") {
            const { listFoodAddUse } = nextProps.mylistFoodAddUse;
            listFoodAddUse.map(item => {
                item.checkedFoodAddUse = false
                arrFoodAddUse.push(item)
            })
            this.setState({ arrDataFoodAddUse: arrFoodAddUse });
        }
    }
    _keyExtractor = (item) => item.id;
    componentDidMount() {
        this.props.fetchDataFoodAddUse();
    }
    onChecked(id) {
        const resultFoodAddUse = []
        this.state.arrDataFoodAddUse.map(item => {
            if (item.id === id) {
                item.checkedFoodAddUse = !item.checkedFoodAddUse;
            }
            resultFoodAddUse.push(item)
        })
        //this.setState({ arrDataFoodAddUse: resultFoodAddUse });
        this.listCheckedFoodAddUse(resultFoodAddUse);
    }
    listCheckedFoodAddUse(result){
        const resultID = []
        const resultName = []
        result.map(item => {
            if(item.checked === true)
            {
                resultID.push(item.id);
                resultName.push(item.Name);
            }
        })
        this.setState({}, ()=> saver.setDataFoodAddUseID(resultID,resultName));
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.arrDataFoodAddUse}
                    contentContainerStyle={{ flexDirection: 'column', flex: 1 }}
                    numColumns={3}
                    renderItem={({ item }) =>
                        <View style={{ flexDirection: 'row', width: "33.3%" }}>
                            <CheckBox value={item.checkedFoodAddUse}
                                onValueChange={() => this.onChecked(item.id)}
                            />
                            <Text style={{ alignSelf: 'center', textAlign: 'center' }} onPress={() => this.onChecked(item.id)}>{item.Name}</Text>
                        </View>
                    }
                    keyExtractor={this._keyExtractor}
                />
            </View>

        );
    }
}
function mapStateToProps(state) {
    return {
        mylistFoodAddUse: state.listFoodAddUse
    };
}
export default connect(mapStateToProps, { fetchDataFoodAddUse })(ListFoodAddUse);