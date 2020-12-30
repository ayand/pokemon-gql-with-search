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

const GenerationContainer = new GraphQLObjectType({
    name: 'GenerationContainer',
    fields: () => ({
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
        }
    })
});

module.exports = GenerationContainer;
