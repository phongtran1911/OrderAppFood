import urlDefault from './UrlDefault';
const checkLogin = (token) => (
    fetch(urlDefault + 'Apps/postCheck_Login',
    {   
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token })
    })
    .then(res => res.json())
);

module.exports = checkLogin;
