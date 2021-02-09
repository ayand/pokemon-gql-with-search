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

module.exports.VersionGameIndex = new GraphQLObjectType({
    name: 'VersionGameIndex',
    fields: () => {
      const {VersionContainer} = require('./VersionContainer');
      return {
          id: {
            type: GraphQLID,
            resolve(parentValue, args) {
                return parentValue.game_index;
            }
          },
          game_index: {
              type: GraphQLInt
          },
          version: {
              type: VersionContainer
          }
      }
    }
});
