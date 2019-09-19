let myFoodTypeID = undefined;
let myFoodTypeName = undefined;
let myFoodExceptID = undefined;
let myFoodExceptName = undefined;
let myBowlTypeID = undefined;
let myBowlTypeName = undefined;
let myFoodAddID = undefined;
let myFoodAddName = undefined;
let myDrinkID = undefined;
let myDrinkName = undefined;
let myFoodAddUseID = undefined;
let myFoodAddUseName = undefined;
let myTableID = undefined;
const setDataFoodTypeID = (id, name) => {
  myFoodTypeID = id;
  myFoodTypeName = name;
};
const getDataFoodTypeID = () => {
  return myFoodTypeID;
};
const getDataFoodTypeName = () => {
  return myFoodTypeName;
};
const setDataFoodExceptID = (id, name) => {
  myFoodExceptID = id;
  myFoodExceptName = name;
};
const getDataFoodExceptID = () => {
  return myFoodExceptID;
};
const getDataFoodExceptName = () => {
  return myFoodExceptName;
};
const setDataBowlTypeID = (id, name) => {
  myBowlTypeID = id;
  myBowlTypeName = name;
};
const getDataBowlTypeID = () => {
  return myBowlTypeID;
};
const getDataBowlTypeName = () => {
  return myBowlTypeName;
};
const setDataFoodAddID = (id, name) => {
  myFoodAddID = id;
  myFoodAddName = name;
};
const getDataFoodAddID = () => {
  return myFoodAddID;
};
const getDataFoodAddName = () => {
  return myFoodAddName;
};
const setDataDrinkID = (id, name) => {
  myDrinkID = id;
  myDrinkName = name;
};
const getDataDrinkID = () => {
  return myDrinkID;
};
const getDataDrinkName = () => {
  return myDrinkName;
};
const setDataFoodAddUseID = (id, name) => {
  myFoodAddUseID = id;
  myFoodAddUseName = name;
};
const getDataFoodAddUseID = () => {
  return myFoodAddUseID;
};
const getDataFoodAddUseName = () => {
  return myFoodAddUseName;
};
const setDataTableID = id => {
  myTableID = id;
};
const getDataTableID = () => {
  return myTableID;
};
export default {
  setDataFoodTypeID,
  setDataBowlTypeID,
  setDataDrinkID,
  setDataFoodAddID,
  setDataFoodExceptID,
  setDataFoodAddUseID,
  setDataTableID,

  getDataFoodTypeID,
  getDataBowlTypeID,
  getDataDrinkID,
  getDataFoodAddID,
  getDataFoodAddUseID,
  getDataFoodExceptID,
  getDataTableID,

  getDataFoodTypeName,
  getDataBowlTypeName,
  getDataDrinkName,
  getDataFoodAddName,
  getDataFoodAddUseName,
  getDataFoodExceptName,
};
