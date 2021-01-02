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


module.exports.Location = new GraphQLObjectType({
    name: 'Location',
    fields: () => {
      const LocationAreaContainer = require('./LocationAreaContainer').LocationAreaContainer;
      const GameIndex = require('./GameIndex').GameIndex;
      const Name = require('./Name').Name;
      const RegionContainer = require('./RegionContainer').RegionContainer;

      return {
          game_indices: { type: new GraphQLList(GameIndex) },
          id: { type: GraphQLID },
          location_areas: {
              type: new GraphQLList(LocationAreaContainer),
              resolve(parentValue, args) {
                  return parentValue.areas;
              }
          },
          name: {
              type: GraphQLString,
              resolve(parentValue, args) {
                  return parentValue.name.toUpperCase().replace(/-/g, " ");
              }
          },
          names: { type: new GraphQLList(Name) },
          region: { type: RegionContainer }
      }
    }
})
