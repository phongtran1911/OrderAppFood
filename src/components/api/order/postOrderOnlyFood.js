import url from '../UrlDefault';
const postOrderOnlyFood = (data, user_id) => (
    fetch(url + 'Order/postOrderOnlyFood/' + user_id,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(resJson => JSON.parse(resJson).status)
);

module.exports = postOrderOnlyFood;