const resourceService = require('./common');

function getGeneration(id) {
    return resourceService.getResource(id, 'generation');
}

module.exports = { getGeneration };
