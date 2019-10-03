// module.exports = {
//     addFoodToOrder: null,
//     incrQuantity: null,
//     decrQuantity: null,
//     removeFood: null,
//     onSignIn: null
// };

let onSignIn = undefined;
let tokenDevice = undefined;
const setonSignIn = data => {
  onSignIn = data;
};
const getonSignIn = () => {
  return onSignIn;
};
const setTokenDevice = data => {
  tokenDevice = data;
};
const getTokenDevice = () => {
  return tokenDevice;
}
export default {
  setonSignIn,
  getonSignIn,
  setTokenDevice,
  getTokenDevice,
};
