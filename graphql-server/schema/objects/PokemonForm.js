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

const PokemonForm = new GraphQLObjectType({
    name: 'PokemonForm',
    fields: () => ({
        form_name: { type: GraphQLString },
        form_order: { type: GraphQLInt },
        id: { type: GraphQLID },
        is_battle_only: { type: GraphQLBoolean },
        is_default: { type: GraphQLBoolean },
        is_mega: { type: GraphQLBoolean },
        name: {
          type: GraphQLString,
          resolve(parentValue, args, res) {
              return parentValue.name.toUpperCase().replace(/-/g, " ");
          }
        },
        order: { type: GraphQLInt }
    })
});

module.exports = PokemonForm;
