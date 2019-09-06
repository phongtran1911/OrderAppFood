import url from '../UrlDefault';
const getBowlType = () => (
    fetch(url + 'Apps/getBowlType', {method: "GET"})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result)
);

module.exports = getBowlType;