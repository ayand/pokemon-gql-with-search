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

module.exports.PokemonTypeContainer = new GraphQLObjectType({
    name: 'PokemonTypeContainer',
    fields: () => {
      const Type = require('./Type').Type;
      const TypeService = require('../../services/type');

      return {
          id: {
            type: GraphQLID,
            resolve(parentValue, args) {
                const url = parentValue.type.url;
                const components = url.split("/");
                const id = components[components.length - 2];
                return id;
            }
          },
          name: {
              type: GraphQLString,
              resolve(parentValue, args) {
                  return parentValue.type.name.toUpperCase().replace(/-/g, " ");
              }
          },
          slot: { type: GraphQLInt },
          type: {
              type: Type,
              resolve(parentValue) {
                  const url = parentValue.type.url;
                  const components = url.split("/");
                  const id = components[components.length - 2];
                  return TypeService.getType(id);
              }
          }
      }
    }
});
