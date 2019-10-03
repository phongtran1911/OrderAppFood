import {AsyncStorage} from 'react-native';

const saveToken = async id => {
  try {
    await AsyncStorage.setItem('@UserID', id);
    return 'THANH_CONG';
  } catch (e) {
    return e;
  }
};

export default saveToken;
