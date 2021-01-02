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

module.exports.GameIndex = new GraphQLObjectType({
    name: 'GameIndex',
    fields: () => {
      return {
          id: { type: GraphQLID, resolve(parentValue, args, res) { return parentValue.game_index; } },
          game_index: { type: GraphQLInt },
          generation_name: { type: GraphQLString, resolve(parentValue, args, res) { return parentValue.generation.name.toUpperCase().replace(/-/g, " "); } },
          generation_id: {
            type: GraphQLInt,
            resolve(parentValue, args, res) {
                const url = parentValue.generation.url;
                const components = url.split("/");
                const id = components[components.length - 2];
                return parseInt(id);
            }
          }

      }
    }
})
