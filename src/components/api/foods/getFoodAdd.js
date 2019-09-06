import url from '../UrlDefault';
const getFoodAdd = () => (
    fetch(url + 'Apps/getFoodAdd', {method: "GET"})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result)
);

module.exports = getFoodAdd;