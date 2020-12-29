const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const { pokemon, pokemonSpecies, pokemonForm } = require('./pokemon');
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
        moveDamageClass,
        pokemonForm
    })
});

module.exports = RootQueryType;
