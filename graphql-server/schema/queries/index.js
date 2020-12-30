const graphql = require('graphql');
const { GraphQLObjectType } = graphql;

const { pokemon, pokemonSpecies, pokemonForm } = require('./pokemon');
const { ability } = require('./ability');
const { type } = require('./type');
const { move } = require('./move');
const { moveDamageClass } = require('./moveDamageClass');
const { generation } = require('./generation');
const { region } = require('./region');
const { location } = require('./location');
const { moveLearnMethod } = require('./moveLearnMethod');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        pokemon,
        pokemonSpecies,
        ability,
        type,
        move,
        moveDamageClass,
        pokemonForm,
        generation,
        region,
        location,
        moveLearnMethod
    })
});

module.exports = RootQueryType;
