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

const MoveDamageClass = new GraphQLObjectType({
    name: 'MoveDamageClass',
    fields: () => ({
        id: { type: GraphQLID },
        name: {
          type: GraphQLString,
          resolve(parentValue, args, res) {
              return parentValue.name.toUpperCase().replace(/-/g, " ");
          }
        }
    })
});

module.exports = MoveDamageClass;
