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

module.exports.Ability = new GraphQLObjectType({
    name: 'Ability',
    fields: () => {
        const EffectEntry = require('./EffectEntry').EffectEntry;
        return {
          effect_entries: { type: new GraphQLList(EffectEntry) },
          id: { type: GraphQLID },
          is_main_series: { type: GraphQLBoolean },
          name: {
            type: GraphQLString,
            resolve(parentValue, args, res) {
                return parentValue.name.toUpperCase().replace(/-/g, " ");
            }
          }
        }
    }
});
