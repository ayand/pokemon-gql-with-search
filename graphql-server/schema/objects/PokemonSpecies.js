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

const SpeciesService = require('../../services/species');

const PokemonSpecies = new GraphQLObjectType({
    name: 'PokemonSpecies',
    fields: () => ({
        base_happiness: { type: GraphQLInt },
        capture_rate: { type: GraphQLFloat },
        evolves_from_species: {
            type: PokemonSpecies,
            resolve(parentValue, args, res) {
              const url = parentValue.evolves_from_species.url;
              const components = url.split("/");
              const id = components[components.length - 2];
              return SpeciesService.getSpecies(id);
            }
        },
        forms_switchable: { type: GraphQLBoolean },
        gender_rate: { type: GraphQLFloat },
        has_gender_differences: { type: GraphQLBoolean },
        hatch_counter: { type: GraphQLInt },
        id: { type: GraphQLID },
        is_baby: { type: GraphQLBoolean },
        is_legendary: { type: GraphQLBoolean },
        is_mythical: { type: GraphQLBoolean },
        name: {
          type: GraphQLString,
          resolve(parentValue, args, res) {
              return parentValue.name.toUpperCase();
          }
        },
        order: { type: GraphQLInt },
    })
});

module.exports = PokemonSpecies;
