const resourceService = require('./common');

function getStat(id) {
    return resourceService.getResource(id, 'stat');
}

module.exports = { getStat };
