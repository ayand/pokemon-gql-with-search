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

module.exports.StatContainer = new GraphQLObjectType({
    name: 'StatContainer',
    fields: () => {
      const {Stat} = require('./Stat');
      const StatService = require('../../services/Stat');

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
          stat: {
              type: Stat,
              resolve(parentValue, args) {
                  const url = parentValue.url;
                  const components = url.split("/");
                  const id = components[components.length - 2];
                  return StatService.getStat(id);
              }
          }
      }
    }
})
