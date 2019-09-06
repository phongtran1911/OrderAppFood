import { AsyncStorage } from 'react-native';
const getToken = async () => {
    try {
        const value = await AsyncStorage.getItem('@UserID');
        //const value = await AsyncStorage.removeItem('@tokenUser');
        if (value !== null) {
            return value;
        }
        return '';
    } catch (error) {
    // Error retrieving data
        return '';
    }
};

export default getToken;