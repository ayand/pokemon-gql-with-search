const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const Move = require('../objects/Move');

const MoveService = require('../../services/move');

module.exports = {
    move: {
        type: Move,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return MoveService.getMove(id);
        }
    }
}
