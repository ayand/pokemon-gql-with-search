const axios = require('axios');

function getSpecies(id) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(res => res.data);
}

module.exports = { getSpecies };
