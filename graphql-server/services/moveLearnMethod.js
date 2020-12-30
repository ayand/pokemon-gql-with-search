const resourceService = require('./common');

function getMoveLearnMethod(id) {
    return resourceService.getResource(id, 'move-learn-method');
}

module.exports = { getMoveLearnMethod };
