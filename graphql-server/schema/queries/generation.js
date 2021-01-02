const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const {Generation} = require('../objects/Generation');

const GenerationService = require('../../services/generation');

module.exports = {
    generation: {
        type: Generation,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return GenerationService.getGeneration(id);
        }
    }
}
