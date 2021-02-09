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

module.exports.VersionContainer = new GraphQLObjectType({
    name: 'VersionContainer',
    fields: () => {
      const {Version} = require('./Version');
      const VersionService = require('../../services/version');

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
          version: {
              type: Version,
              resolve(parentValue) {
                  const url = parentValue.url;
                  const components = url.split("/");
                  const id = components[components.length - 2];
                  return VersionService.getVersion(id);
              }
          }
      }
    }
});
