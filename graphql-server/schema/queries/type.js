const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const Type = require('../objects/Type');

const TypeService = require('../../services/type');

module.exports = {
    type: {
        type: Type,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return TypeService.getType(id);
        }
    }
}
