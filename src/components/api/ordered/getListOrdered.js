import url from '../UrlDefault';
const getListOrdered = idOrder =>
  fetch(url + 'Order/getListOrdered/' + idOrder, {method: 'GET'})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).list);

module.exports = getListOrdered;
