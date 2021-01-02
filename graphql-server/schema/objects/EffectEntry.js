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

module.exports.EffectEntry = new GraphQLObjectType({
    name: 'EffectEntry',
    fields: () => {
        return {
            id: {
                type: GraphQLID,
                resolve(parentValue, args) {
                    return parentValue.language.name;
                }
            },
            effect: { type: GraphQLString },
            short_effect: { type: GraphQLString }
        }
    }
});
