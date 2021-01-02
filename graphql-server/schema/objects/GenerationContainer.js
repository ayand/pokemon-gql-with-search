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

module.exports.GenerationContainer = new GraphQLObjectType({
    name: 'GenerationContainer',
    fields: () => {
      const Generation = require('./Generation').Generation;
      const GenerationService = require('../../services/generation');
      return {
          id: {
            type: GraphQLID,
            resolve(parentValue) {
                const url = parentValue.url;
                const components = url.split("/");
                const id = components[components.length - 2];
                return id;
            }
          },
          name: {
              type: GraphQLString,
              resolve(parentValue) {
                  return parentValue.name.toUpperCase().replace(/-/g, " ");
              }
          },
          generation: {
              type: Generation,
              resolve(parentValue) {
                  const url = parentValue.url;
                  const components = url.split("/");
                  const id = components[components.length - 2];
                  return GenerationService.getGeneration(id);
              }
          }
      }
    }
});
