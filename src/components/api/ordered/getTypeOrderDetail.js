import url from '../UrlDefault';
const getTypeOrderDetail = idOrderDetail =>
  fetch(url + 'Order/getTypeOrderDetail/' + idOrderDetail, {method: 'GET'})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result);

module.exports = getTypeOrderDetail;
