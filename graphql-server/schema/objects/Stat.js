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

module.exports.Stat = new GraphQLObjectType({
    name: 'Stat',
    fields: () => {
      const {Name} = require('./Name');
      return {
          id: { type: GraphQLID },
          name: {
            type: GraphQLString,
            resolve(parentValue, args, res) {
                return parentValue.name.toUpperCase().replace(/-/g, " ");
            }
          },
          names: { type: new GraphQLList(Name) },
          game_index: { type: GraphQLInt },
          is_battle_only: { type: GraphQLBoolean }
      }
    }
})
