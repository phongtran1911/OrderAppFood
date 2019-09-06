import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import icEdit from '../../../icons/edit.png';
import icTrash from '../../../icons/trash.png';
import { fetchDataDeletePostType } from '../../../redux/actionCreators/foodtypeAction/postFoodTypeAction';
class FoodTypeList extends Component {
    onDelete() {
        const { myFoodID } = this.props;
        Alert.alert(
            'Bạn có muốn xóa món ăn này không?',
            this.props.myFoodType.Name,
            [
                {
                    text: 'Hủy bỏ',
                    onPress: () => console.log('Cancel Press'),
                    style: 'cancel'
                },
                {
                    text: 'Xóa',
                    onPress: () => {
                        this.props.fetchDataDeletePostType(this.props.myFoodType.id, myFoodID);
                    }
                }
            ],
            { cancelable: false }
        );
    }
    render() {
        const { id, Name, is_FoodAdd } = this.props.myFoodType;

        return (
            <View style={{flex: 1}}>
                <View style={styles.container}>
                    <Text style={styles.btnTextFood}>{Name}</Text>
                    <Text />
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={()=> Actions.push("foodtypeedit",{idFoodType:id,Name: Name, is_FoodAdd: is_FoodAdd, idFood: this.props.myFoodID})}>
                            <Image source={icEdit} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.onDelete.bind(this)}>
                            <Image source={icTrash} style={styles.imageStyle}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 15,
        backgroundColor: '#46b6a6'
    },
    btnTextFood: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '700',
        padding: 10
    },
    imageStyle: {
        height: 25,
        width: 25,
        marginRight: 3
    }
})
function mapStateToProps(state) {
    return {
        myListFoodType: state.listFoodType
    };
}
export default connect(mapStateToProps, { fetchDataDeletePostType })(FoodTypeList);