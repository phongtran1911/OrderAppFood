// module.exports = {
//     addFoodToOrder: null,
//     incrQuantity: null,
//     decrQuantity: null,
//     removeFood: null,
//     onSignIn: null
// };

let onSignIn = undefined;

const setonSignIn = data => {
  onSignIn = data;
};
const getonSignIn = () => {
  return onSignIn;
};
export default {
  setonSignIn,
  getonSignIn,
};
