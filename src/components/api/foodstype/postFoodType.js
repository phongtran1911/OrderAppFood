import url from '../UrlDefault';
const postFoodType = (Name,is_FoodAdd, idFood) => (
    fetch(url + 'Apps/postFoodType/' + idFood,
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ Name,is_FoodAdd })
    })
    .then(res => res.json())
    .then(resJson => JSON.parse(resJson).status)
);

module.exports = postFoodType;