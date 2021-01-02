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

const PokemonStatContainer = new GraphQLObjectType({
    name: 'PokemonStatContainer',
    fields: () => ({
        id: { type: GraphQLID, resolve(parentValue) { return parentValue.stat.name; } },
        base_stat: { type: GraphQLInt },
        effort: { type: GraphQLInt },
        stat: { type: StatContainer }
    })
})

const StatContainer = require('./StatContainer');

module.exports = PokemonStatContainer;
