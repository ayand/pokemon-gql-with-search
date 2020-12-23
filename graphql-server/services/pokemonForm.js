const axios = require('axios');

function getPokemonForm(id) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon-form/${id}`).then(res => res.data);
}

module.exports = { getPokemonForm };
