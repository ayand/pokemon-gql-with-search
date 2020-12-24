const resourceService = require('./common');

function getSpecies(id) {
    return resourceService.getResource(id, 'pokemon-species');
}

module.exports = { getSpecies };
