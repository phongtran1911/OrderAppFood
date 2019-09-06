import url from '../UrlDefault';
const getFoodAddUse = () => (
    fetch(url + 'Apps/getFoodAddUse', {method: "GET"})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result)
);

module.exports = getFoodAddUse;