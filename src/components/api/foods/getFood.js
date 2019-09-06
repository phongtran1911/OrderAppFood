import url from '../UrlDefault';
const getFood = () => (
    fetch(url + 'Apps/getFoodOnMorning', {method: "GET"})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result)
);

module.exports = getFood;