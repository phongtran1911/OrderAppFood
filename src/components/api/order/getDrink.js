import url from '../UrlDefault';
const getDrink = () =>
  fetch(url + 'Apps/getDrink', {method: 'GET'})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result);

module.exports = getDrink;
