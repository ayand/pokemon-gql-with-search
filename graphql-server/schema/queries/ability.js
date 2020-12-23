const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const Ability = require('../objects/Ability');

const AbilityService = require('../../services/ability');

module.exports = {
    ability: {
        type: Ability,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return AbilityService.getAbility(id);
        }
    }
}
