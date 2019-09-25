import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBDBD8',
  },
  wrapper: {
    backgroundColor: '#fff',
    shadowColor: '#2E272B',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    paddingHorizontal: 3,
    flex: 8,
  },
  productContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderTopColor: '#DBD8D8',
    borderBottomColor: '#FFF',
    borderLeftColor: '#FFF',
    borderRightColor: '#FFF',
    borderWidth: 1,
  },
  icStyle: {
    width: 25,
    height: 25,
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
  },
  txtName: {
    fontFamily: 'Avenir',
    color: '#333333',
    fontSize: 20,
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
