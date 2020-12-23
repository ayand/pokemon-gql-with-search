const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const { pokemon, pokemonSpecies } = require('./pokemon');
const { ability } = require('./ability');

const RootQueryType = new GraphQLObjectType({
    name: 'Queries',
    fields: () => ({
        pokemon,
        pokemonSpecies,
        ability
    })
});

module.exports = RootQueryType;
