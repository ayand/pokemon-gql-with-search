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

const Stat = new GraphQLObjectType({
    name: 'Stat',
    fields: () => ({
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
    })
})

const Name = require('./Name');

module.exports = Stat;
