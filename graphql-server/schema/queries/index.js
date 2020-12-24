const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const { pokemon, pokemonSpecies } = require('./pokemon');
const { ability } = require('./ability');
const { type } = require('./type');
const { move } = require('./move');
const { moveDamageClass } = require('./moveDamageClass');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        pokemon,
        pokemonSpecies,
        ability,
        type,
        move,
        moveDamageClass
    })
});

module.exports = RootQueryType;
