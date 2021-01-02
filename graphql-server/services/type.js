const resourceService = require('./common');

function getType(id) {
    return resourceService.getResource(id, 'type');
}

function getTypes(ids) {
    return resourceService.getResources(ids, 'type');
}


module.exports = { getType, getTypes };
