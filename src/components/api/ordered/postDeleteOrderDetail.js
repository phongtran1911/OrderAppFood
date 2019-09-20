import url from '../UrlDefault';
const deleteOrderDetail = (idOrder, idOrdered) =>
  fetch(url + 'Order/postDeleteOrderDetail/' + idOrder + '/' + idOrdered, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(res => res.json())
    .then(resJson => console.log(JSON.parse(resJson).status));

module.exports = deleteOrderDetail;
