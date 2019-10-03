import {AsyncStorage} from 'react-native';
const getTokenDevice = async () => {
  try {
    const value = await AsyncStorage.getItem('@tokenDevice');
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

export default getTokenDevice;
