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

module.exports.PokemonMoveContainer = new GraphQLObjectType({
    name: 'PokemonMoveContainer',
    fields: () => {
        const {MoveContainer} = require('./MoveContainer');
        const {VersionGroupDetails} = require('./VersionGroupDetails');
        return {
            id: {
                type: GraphQLID,
                resolve(parentValue) {
                    const url = parentValue.move.url;
                    const components = url.split("/");
                    const id = components[components.length - 2];
                    return id;
                }
            },
            move: { type: MoveContainer },
            version_group_details: { type: new GraphQLList(VersionGroupDetails) }
        }
    }
})
