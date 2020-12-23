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

const Ability = require('./Ability');
const AbilityService = require('../../services/ability');

const AbilityContainer = new GraphQLObjectType({
    name: 'AbilityContainer',
    fields: () => ({
        id: {
          type: GraphQLID,
          resolve(parentValue, args) {
              return parentValue.ability.name;
          }
        },
        ability: {
            type: Ability,
            resolve(parentValue, args) {
                const url = parentValue.ability.url;
                const components = url.split("/");
                const id = components[components.length - 2];
                return AbilityService.getAbility(id);
            }
        },
        is_hidden: { type: GraphQLBoolean },
        slot: { type: GraphQLInt }
    })
});

module.exports = AbilityContainer;
