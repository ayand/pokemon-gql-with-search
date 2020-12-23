const axios = require('axios');

function getAbility(id) {
    return axios.get(`https://pokeapi.co/api/v2/ability/${id}`).then(res => res.data);
}

function getAbilities(ids) {
    const urls = ids.map(id => `https://pokeapi.co/api/v2/ability/${id}`);

    return axios.all(urls).then(axios.spread((...responses) => responses));
}

module.exports = { getAbility, getAbilities };
