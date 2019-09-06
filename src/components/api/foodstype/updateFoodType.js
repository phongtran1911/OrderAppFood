import url from '../UrlDefault';
const updateFoodType = (Name,is_FoodAdd,idFoodType) => (
    fetch(url + 'Apps/postEditFoodType/' + idFoodType,
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ Name,is_FoodAdd })
    })
    .then(res => res.json())
    .then(resJson => console.log(JSON.parse(resJson).status))
);

module.exports = updateFoodType;