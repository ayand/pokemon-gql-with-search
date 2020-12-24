const resourceService = require('./common');

function getMove(id) {
    return resourceService.getResource(id, 'move');
}

function getMoves(ids) {
    return resourceService.getResources(id, 'move');
}

module.exports = { getMove, getMoves };
