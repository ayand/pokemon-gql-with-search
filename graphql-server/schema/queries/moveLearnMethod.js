const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const {MoveLearnMethod} = require('../objects/MoveLearnMethod');

const MoveLearnMethodService = require('../../services/moveLearnMethod');

module.exports = {
    moveLearnMethod: {
        type: MoveLearnMethod,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return MoveLearnMethodService.getMoveLearnMethod(id);
        }
    }
}
