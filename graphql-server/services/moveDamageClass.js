const resourceService = require('./common');

function getMoveDamageClass(id) {
    return resourceService.getResource(id, 'move-damage-class');
}

module.exports = { getMoveDamageClass };
