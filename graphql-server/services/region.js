const resourceService = require('./common');

function getRegion(id) {
    return resourceService.getResource(id, 'region');
}

module.exports = { getRegion };
