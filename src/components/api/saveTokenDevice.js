import {AsyncStorage} from 'react-native';

const saveTokenDevice = async token => {
  try {
    await AsyncStorage.setItem('@tokenDevice', token);
    return 'THANH_CONG';
  } catch (e) {
    return e;
  }
};

export default saveTokenDevice;
