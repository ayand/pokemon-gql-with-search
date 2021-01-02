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

module.exports.SpeciesContainer = new GraphQLObjectType({
    name: 'SpeciesContainer',
    fields: () => {
      const PokemonSpecies = require('./PokemonSpecies').PokemonSpecies;
      const SpeciesService = require('../../services/species');

      return {
          id: {
            type: GraphQLID,
            resolve(parentValue, args) {
                const url = parentValue.url;
                const components = url.split("/");
                const id = components[components.length - 2];
                return id;
            }
          },
          name: {
              type: GraphQLString,
              resolve(parentValue, args) {
                  return parentValue.name.toUpperCase().replace(/-/g, " ");
              }
          },
          species: {
              type: PokemonSpecies,
              resolve(parentValue) {
                const url = parentValue.url;
                const components = url.split("/");
                const id = components[components.length - 2];
                return SpeciesService.getSpecies(id);
              }
          }
      }
    }
});
