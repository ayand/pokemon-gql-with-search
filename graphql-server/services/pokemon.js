const axios = require('axios');

function getPokemon(id) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.data);
}

module.exports = { getPokemon };
