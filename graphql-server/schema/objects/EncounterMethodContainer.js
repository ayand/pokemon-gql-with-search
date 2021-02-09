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

module.exports.EncounterMethodContainer = new GraphQLObjectType({
    name: 'EncounterMethodContainer',
    fields: () => {
      const {EncounterMethod} = require('./EncounterMethod');
      const EncounterMethodService = require('../../services/encounterMethod');

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
          encounterMethod: {
              type: EncounterMethod,
              resolve(parentValue, args) {
                  const url = parentValue.url;
                  const components = url.split("/");
                  const id = components[components.length - 2];
                  return EncounterMethodService.getEncounterMethod(id);
              }
          }
      }
    }
});
