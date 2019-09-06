import url from '../UrlDefault';
const getFoodOnAfternoon = () => (
    fetch(url + 'Apps/getFoodOnAfternoon', {method: "GET"})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result)
);

module.exports = getFoodOnAfternoon;