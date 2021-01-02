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

module.exports.RegionContainer = new GraphQLObjectType({
    name: 'RegionContainer',
    fields: () => {
      const {Region} = require('./Region');
      const RegionService = require('../../services/region');
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
          region: {
              type: Region,
              resolve(parentValue) {
                const url = parentValue.url;
                const components = url.split("/");
                const id = components[components.length - 2];
                return RegionService.getRegion(id);
              }
          }
      }
    }
});
