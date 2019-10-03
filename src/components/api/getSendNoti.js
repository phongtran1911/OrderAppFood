import url from './UrlDefault';
const getSendNoti = tokenDevice =>
  fetch(url + 'SendNoti/SendMessage' + tokenDevice, {method: 'GET'})
    .then(res => res.json())
    .then(resJson => resJson);

module.exports = getSendNoti;
