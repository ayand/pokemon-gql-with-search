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
              const url = parentValue.type.url;
              const components = url.split("/");
              const id = components[components.length - 2];
              return id;
          }
        },
        name: {
            type: GraphQLString,
            resolve(parentValue, args) {
                return parentValue.type.name.toUpperCase().replace("-", " ");
            }
        },
        slot: { type: GraphQLInt }
    })
});

module.exports = TypeContainer;
