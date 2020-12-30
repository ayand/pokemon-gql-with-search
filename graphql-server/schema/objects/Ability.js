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

const EffectEntry = require('./EffectEntry');

const Ability = new GraphQLObjectType({
    name: 'Ability',
    fields: () => ({
        effect_entries: { type: new GraphQLList(EffectEntry) },
        id: { type: GraphQLID },
        is_main_series: { type: GraphQLBoolean },
        name: {
          type: GraphQLString,
          resolve(parentValue, args, res) {
              return parentValue.name.toUpperCase().replace(/-/g, " ");
          }
        }
    })
});

module.exports = Ability;
