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

module.exports.PokemonStatContainer = new GraphQLObjectType({
    name: 'PokemonStatContainer',
    fields: () => {
      const StatContainer = require('./StatContainer').StatContainer;
      return {
          id: { type: GraphQLID, resolve(parentValue) { return parentValue.stat.name; } },
          base_stat: { type: GraphQLInt },
          effort: { type: GraphQLInt },
          stat: { type: StatContainer }
      }
    }
})
