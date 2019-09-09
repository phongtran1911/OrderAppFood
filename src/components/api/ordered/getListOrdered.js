import url from '../UrlDefault';
const getListOrdered = () =>
  fetch(url + 'Order/getListOrdered', {method: 'GET'})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).list);

module.exports = getListOrdered;
