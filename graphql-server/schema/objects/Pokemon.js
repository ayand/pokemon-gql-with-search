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

const AbilityContainer = require('./AbilityContainer');
const PokemonFormContainer = require('./PokemonFormContainer');
const PokemonSpecies = require('./PokemonSpecies');
const Stat = require('./Stat');

const PokemonService = require('../../services/pokemon');
const SpeciesService = require('../../services/species');

const Pokemon = new GraphQLObjectType({
    name: 'Pokemon',
    fields: () => ({
        abilities: { type: new GraphQLList(AbilityContainer) },
        base_experience: { type: GraphQLInt },
        forms: { type: new GraphQLList(PokemonFormContainer) },
        height: { type: GraphQLFloat },
        id: { type: GraphQLID },
        is_default: { type: GraphQLBoolean },
        name: {
          type: GraphQLString,
          resolve(parentValue, args, res) {
              return parentValue.name.toUpperCase().replace("-", " ");
          }
        },
        order: { type: GraphQLInt },
        species: {
            type: PokemonSpecies,
            resolve(parentValue, args, res) {
                const url = parentValue.species.url;
                const components = url.split("/");
                const id = components[components.length - 2];
                return SpeciesService.getSpecies(id);
            }
        },
        stats: {
            type: new GraphQLList(Stat)
        },
        types: { type: new GraphQLList(TypeContainer) },
        weight: { type: GraphQLFloat }
    })
});

module.exports = Pokemon;

const TypeContainer = require('./TypeContainer');
