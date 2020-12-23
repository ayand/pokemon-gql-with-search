const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const Pokemon = require('../objects/Pokemon');
const PokemonSpecies = require('../objects/PokemonSpecies');

const PokemonService = require('../../services/pokemon');
const SpeciesService = require('../../services/species');

module.exports = {
    pokemon: {
        type: Pokemon,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return PokemonService.getPokemon(id);
        }
    },
    pokemonSpecies: {
        type: PokemonSpecies,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return SpeciesService.getSpecies(id);
        }
    }
}
