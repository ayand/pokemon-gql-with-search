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

const EffectEntry = new GraphQLObjectType({
    name: 'EffectEntry',
    fields: () => ({
        id: {
            type: GraphQLID,
            resolve(parentValue, args) {
                return parentValue.language.name;
            }
        },
        effect: { type: GraphQLString },
        short_effect: { type: GraphQLString }
    })
});

module.exports = EffectEntry;
