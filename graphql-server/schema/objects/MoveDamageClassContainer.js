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

module.exports.MoveDamageClassContainer = new GraphQLObjectType({
    name: 'MoveDamageClassContainer',
    fields: () => {
      const MoveDamageClass = require('./MoveDamageClass').MoveDamageClass;
      const MoveDamageClassService = require('../../services/moveDamageClass');

      return {
          id: {
              type: GraphQLID,
              resolve(parentValue) {
                  const url = parentValue.url;
                  const components = url.split("/");
                  const id = components[components.length - 2];
                  return id;
              }
          },
          name: {
              type: GraphQLString,
              resolve(parentValue, args) {
                  return parentValue.name.toUpperCase().replace(/-/g, " ");
              }
          },
          damageClass: {
              type: MoveDamageClass,
              resolve(parentValue) {
                  const url = parentValue.url;
                  const components = url.split("/");
                  const id = components[components.length - 2];
                  return MoveDamageClassService.getMoveDamageClass(id);
              }
          }
      }
    }
})
