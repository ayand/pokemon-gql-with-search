const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const {Version} = require('../objects/Version');

const VersionService = require('../../services/version');

module.exports = {
    version: {
        type: Version,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return VersionService.getVersion(id);
        }
    }
}
