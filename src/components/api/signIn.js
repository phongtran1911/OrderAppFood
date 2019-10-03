import url from './UrlDefault';
const signIn = (username, password) =>
  fetch(url + 'Apps/postAccountLogin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({username, password}),
  }).then(res => res.json());

module.exports = signIn;
