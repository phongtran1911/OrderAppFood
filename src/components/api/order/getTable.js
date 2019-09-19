import url from '../UrlDefault';
const getTable = () =>
  fetch(url + 'Apps/getTable', {method: 'GET'})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result);

module.exports = getTable;
