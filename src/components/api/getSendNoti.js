import url from './UrlDefault';
const getSendNoti = () =>
  fetch(url + 'SendNoti/SendMessage', {
    method: 'GET',
  })
    .then(res => res.json())
    .then(resJson => resJson);

module.exports = getSendNoti;
