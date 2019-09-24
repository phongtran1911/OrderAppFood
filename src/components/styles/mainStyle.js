import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    backgroundColor: '#fff',
    shadowColor: '#95A5A6',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    paddingHorizontal: 3,
    flex: 8,
  },
  containerInput: {
    flex: 1,
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    borderWidth: 1,
    flexDirection: 'column',
  },
  inputRow: {
    flex: 1,
    flexDirection: 'row',
  },
  inputButton: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ff9f56',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputButton: {
    fontSize: 25,
    fontWeight: '400',
    color: '#000',
  },
  phobackground: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  images: {
    height: 150,
    width: 150,
    alignItems: 'center',
  },
  productContainer: {
    //flexDirection: 'row',
    paddingVertical: 15,
    borderTopColor: '#F0F0F0',
    borderBottomColor: '#FFF',
    borderLeftColor: '#FFF',
    borderRightColor: '#FFF',
    borderWidth: 1,
  },
  icStyle: {
    width: 30,
    height: 30,
  },
  txtCount: {
    fontFamily: 'Avenir',
    color: '#B10D65',
    fontSize: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  productImage: {
    width: 90,
    height: (90 * 452) / 361,
    borderRadius: 25,
  },
  productInfo: {
    justifyContent: 'space-between',
    marginLeft: 15,
    flex: 1,
    flexDirection: 'row',
  },
  txtName: {
    fontFamily: 'Avenir',
    color: '#333333',
    fontSize: 16,
    fontWeight: '300',
  },
  txtPrice: {
    fontFamily: 'Avenir',
    color: '#3497ed',
  },
  lastRowInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
  },
  lastRowInfoList: {
    justifyContent: 'flex-end',
    alignItems: 'baseline',
  },
  txtShowDetail: {
    fontFamily: 'Avenir',
    color: '#B10D65',
    fontSize: 20,
    paddingRight: 10,
    paddingLeft: 10,
  },
  titleContainer: {
    height: 30,
    justifyContent: 'center',
    paddingLeft: 10,
    backgroundColor: '#cee4ff',
  },
  title: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;
