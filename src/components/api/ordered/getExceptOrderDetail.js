import url from '../UrlDefault';
const getExceptOrderDetail = idOrderDetail =>
  fetch(url + 'Order/getExceptOrderDetail/' + idOrderDetail, {method: 'GET'})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result);

module.exports = getExceptOrderDetail;
