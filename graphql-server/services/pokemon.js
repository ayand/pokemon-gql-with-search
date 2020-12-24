const resourceService = require('./common');

function getPokemon(id) {
    return resourceService.getResource(id, 'pokemon');
}

function getPokemons(id) {
    return resourceService.getResources(id, 'pokemon');
}

module.exports = { getPokemon, getPokemons };
