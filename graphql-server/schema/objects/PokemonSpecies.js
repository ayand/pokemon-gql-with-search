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

module.exports.PokemonSpecies = new GraphQLObjectType({
    name: 'PokemonSpecies',
    fields: () => {
      const SpeciesContainer = require('./SpeciesContainer').SpeciesContainer;
      const SpeciesVariety = require('./SpeciesVariety').SpeciesVariety;
      const SpeciesService = require('../../services/species');

      return {
          base_happiness: { type: GraphQLInt },
          capture_rate: { type: GraphQLFloat },
          evolves_from_species: {
              type: SpeciesContainer
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
          varieties: {
              type: new GraphQLList(SpeciesVariety)
          }
      }
    }
});
