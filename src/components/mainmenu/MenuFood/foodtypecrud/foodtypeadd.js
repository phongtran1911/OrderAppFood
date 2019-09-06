import React, { Component } from 'react';
import { View,Text,TouchableOpacity,StyleSheet,TextInput, Dimensions, CheckBox } from 'react-native';
import { connect } from 'react-redux';
import { toggleIsAdding } from '../../../../redux/actionCreators/isAddingAction';
import { fetchDataPostFoodType } from '../../../../redux/actionCreators/foodtypeAction/postFoodTypeAction';
const { width} = Dimensions.get('window');
class FoodTypeAdd extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Name: '',
            is_FoodAdd: false
        };
        this.onAdd = this.onAdd.bind(this);
    }
    onAdd() {
        const { Name,is_FoodAdd } = this.state;
        const { idFood } = this.props;
        if(Name === '')
        {
            alert("Vui lòng nhập tên món ăn!");
        }
        else
        {
            this.props.fetchDataPostFoodType(Name,is_FoodAdd,idFood);
            this.setState({Name : ''});
            this.props.toggleIsAdding();
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.textInput} 
                    value={this.state.Name}
                    onChangeText={text => this.setState({ Name: text })}
                    placeholder="Tên món"
                />
                <View style={{flexDirection:'row'}}>
                    <CheckBox value={this.state.is_FoodAdd}
                        onChange={value => this.setState({ is_FoodAdd: value})}
                    />
                    <Text style={{alignSelf:'center',textAlign:'center'}} onPress={() => this.setState({is_FoodAdd: !this.state.is_FoodAdd})}>Có thêm vào món thêm?</Text>
                </View>
                

                <TouchableOpacity onPress={this.onAdd} style={styles.buttonAdd}>
                    <Text style={{textAlign:'center', color:'#FFF', fontSize: 16, padding: 5}}>Thêm</Text>
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
        color: '#FFF'
    },
    buttonAdd: {
        backgroundColor: '#4abfc6',
        borderRadius: 25,
        textAlign: 'center',
        width: buttonWidth/3,
        height: buttonWidth/10

    }
});

export default connect(null, { toggleIsAdding,fetchDataPostFoodType })(FoodTypeAdd);
