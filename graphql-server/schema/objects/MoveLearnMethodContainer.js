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

module.exports.MoveLearnMethodContainer = new GraphQLObjectType({
    name: 'MoveLearnMethodContainer',
    fields: () => {
        const {MoveLearnMethod} = require('./MoveLearnMethod');
        const MoveLearnMethodService = require('../../services/moveLearnMethod');
        return {
          id: {
            type: GraphQLID,
            resolve(parentValue, args) {
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
          moveLearnMethod: {
              type: MoveLearnMethod,
              resolve(parentValue) {
                  const url = parentValue.url;
                  const components = url.split("/");
                  const id = components[components.length - 2];
                  return MoveLearnMethodService.getMoveLearnMethod(id);
              }
          }
        }
    }
})
