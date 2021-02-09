const resourceService = require('./common');

function getEncounterMethod(id) {
    return resourceService.getResource(id, 'encounter-method');
}

function getEncounterMethods(id) {
    return resourceService.getResources(id, 'encounter-method');
}

module.exports = { getEncounterMethod, getEncounterMethods };
