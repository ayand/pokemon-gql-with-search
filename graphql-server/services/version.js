const resourceService = require('./common');

function getVersion(id) {
    return resourceService.getResource(id, 'version');
}

function getVersions(ids) {
    return resourceService.getResources(ids, 'version');
}


module.exports = { getVersion, getVersions };
