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

const Type = require('./Type');
const TypeService = require('../../services/type');

const TypeContainer = new GraphQLObjectType({
    name: 'TypeContainer',
    fields: () => ({
        id: {
          type: GraphQLID,
          resolve(parentValue, args) {
              return parentValue.type.name;
          }
        },
        type: {
            type: Type,
            resolve(parentValue, args) {
                const url = parentValue.type.url;
                const components = url.split("/");
                const id = components[components.length - 2];
                return TypeService.getType(id);
            }
        },
        slot: { type: GraphQLInt }
    })
});

module.exports = TypeContainer;
