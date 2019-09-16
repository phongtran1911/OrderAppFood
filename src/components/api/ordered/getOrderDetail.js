import url from '../UrlDefault';
const getOrderDetail = idOrderDetail =>
  fetch(url + 'Order/getOrderDetail/' + idOrderDetail, {method: 'GET'})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result);

module.exports = getOrderDetail;
