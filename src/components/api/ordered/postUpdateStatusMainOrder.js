import url from '../UrlDefault';
const updateStatusMainOrder = idOrder =>
  fetch(url + 'Order/postUpdateStatusMainOrder/' + idOrder, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).status);

module.exports = updateStatusMainOrder;
