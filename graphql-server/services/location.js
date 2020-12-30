const resourceService = require('./common');

function getLocation(id) {
    return resourceService.getResource(id, 'location');
}

module.exports = { getLocation };
