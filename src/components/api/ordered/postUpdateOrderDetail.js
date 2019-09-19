import url from '../UrlDefault';
const postUpdateOrderDetail = (data, idOrderDetail) =>
  fetch(url + 'Order/postUpdateOrderOnlyFood/' + idOrderDetail, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).status);

module.exports = postUpdateOrderDetail;
