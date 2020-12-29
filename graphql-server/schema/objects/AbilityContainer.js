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
              const url = parentValue.ability.url;
              const components = url.split("/");
              const id = components[components.length - 2];
              return id;

          }
        },
        name: {
            type: GraphQLString,
            resolve(parentValue, args) {
                return parentValue.ability.name.toUpperCase().replace("-", " ");
            }
        },
        is_hidden: { type: GraphQLBoolean },
        slot: { type: GraphQLInt }
    })
});

module.exports = AbilityContainer;
