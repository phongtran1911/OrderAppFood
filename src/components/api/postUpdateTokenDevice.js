import url from './UrlDefault';
const postUpdateTokenDevice = (user_id, token_Device) =>
  fetch(url + 'Apps/postUpdateDeviceToken/' + user_id, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({token_Device}),
  })
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).status);

module.exports = postUpdateTokenDevice;
