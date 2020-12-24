const resourceService = require('./common');

function getPokemonForm(id) {
    return resourceService.getResource('pokemon-form');
}

module.exports = { getPokemonForm };
