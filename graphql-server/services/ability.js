const resourceService = require('./common');

function getAbility(id) {
    return resourceService.getResource(id, 'ability');
}

function getAbilities(ids) {
    return resourceService.getResources(id, 'ability');
}

module.exports = { getAbility, getAbilities };
