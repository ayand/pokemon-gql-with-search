const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLBoolean,
    GraphQLList,
    GraphQLInt,
    GraphQLFloat
} = graphql;

const {nanoid} = require('nanoid');

module.exports.VersionGroupDetails = new GraphQLObjectType({
    name: 'VersionGroupDetails',
    fields: () => {
        const {MoveLearnMethodContainer} = require('./MoveLearnMethodContainer');
        const {VersionGroupContainer} = require('./VersionGroupContainer');

        return {
            id: { type: GraphQLID, resolve(parentValue) { return nanoid(); } },
            level_learned_at: { type: GraphQLInt },
            move_learn_method: { type: MoveLearnMethodContainer },
            version_group: { type: VersionGroupContainer }
        }
    }
})
