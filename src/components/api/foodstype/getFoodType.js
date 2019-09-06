import url from '../UrlDefault';
const getFoodType = (idFood) => (
    fetch(url + 'Apps/getFoodType/' + idFood, {method: "GET"})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result)
);

module.exports = getFoodType;