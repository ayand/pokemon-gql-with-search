const resourceService = require('./common');

function getPokemonForm(id) {
    return resourceService.getResource(id, 'pokemon-form');
}

module.exports = { getPokemonForm };
