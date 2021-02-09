const axios = require('axios');

function getPokemonLocationAreas(id) {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`).then(res => res.data);
}

module.exports = { getPokemonLocationAreas }
