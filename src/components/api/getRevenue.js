import url from './UrlDefault';
const getMorningRevenue = () =>
  fetch(url + 'Apps/getMorningRevenueInDay', {method: 'GET'})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result);

const getAfternoonRevenue = () =>
  fetch(url + 'Apps/getAfternoonRevenueInDay', {method: 'GET'})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result);

const getMorningRevenueInMonth = () =>
  fetch(url + 'Apps/getMorningRevenueInMonth', {method: 'GET'})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result);

const getAfternoonRevenueInMonth = () =>
  fetch(url + 'Apps/getAfternoonRevenueInMonth', {method: 'GET'})
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).result);

module.exports = {
  getMorningRevenue,
  getAfternoonRevenue,
  getMorningRevenueInMonth,
  getAfternoonRevenueInMonth,
};
