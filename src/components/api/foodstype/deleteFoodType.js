import url from '../UrlDefault';
const deleteFoodType = (idFoodType) => (
    fetch(url + 'Apps/postDeleteFoodType/' + idFoodType,
    {   
        method: 'POST'
    })
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).status)
);

module.exports = deleteFoodType;