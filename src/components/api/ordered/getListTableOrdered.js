import url from '../UrlDefault';
const getListTableOrdered = () =>
  fetch(url + 'Order/getTableOrdered', {method: 'GET'})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).list);

module.exports = getListTableOrdered;
