const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const Stat = require('../objects/Stat');

const StatService = require('../../services/stat');

module.exports = {
    stat: {
        type: Stat,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return StatService.getStat(id);
        }
    }
}
