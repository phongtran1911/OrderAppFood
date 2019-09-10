import url from '../UrlDefault';
const updateStatusOrdered = idOrdered =>
  fetch(url + 'Order/postUpdateStatusOrder/' + idOrdered, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(res => res.json())
    .then(resJson => console.log(JSON.parse(resJson).status));

module.exports = updateStatusOrdered;
