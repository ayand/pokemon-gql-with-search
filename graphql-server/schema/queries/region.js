const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const {Region} = require('../objects/Region');

const RegionService = require('../../services/region');

module.exports = {
    region: {
        type: Region,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return RegionService.getRegion(id);
        }
    }
}
