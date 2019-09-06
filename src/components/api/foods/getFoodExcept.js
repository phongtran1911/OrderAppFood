import url from '../UrlDefault';
const getFoodExcept = (is_morning) => (
    fetch(url + 'Apps/getFoodExcept/' + is_morning, {method: "GET"})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result)
);

module.exports = getFoodExcept;