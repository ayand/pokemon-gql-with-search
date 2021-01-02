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

module.exports.PokemonFormContainer = new GraphQLObjectType({
    name: 'PokemonFormContainer',
    fields: () => {
      const {PokemonForm} = require('./PokemonForm');
      const PokemonFormService = require('../../services/pokemonForm');
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
          pokemonForm: {
              type: PokemonForm,
              resolve(parentValue) {
                  const url = parentValue.url;
                  const components = url.split("/");
                  const id = components[components.length - 2];
                  return PokemonFormService.getPokemonForm(id);
              }
          }
      }
    }
});
