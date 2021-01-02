const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const {MoveDamageClass} = require('../objects/MoveDamageClass');

const MoveDamageClassService = require('../../services/moveDamageClass');

module.exports = {
    moveDamageClass: {
        type: MoveDamageClass,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return MoveDamageClassService.getMoveDamageClass(id);
        }
    }
}
