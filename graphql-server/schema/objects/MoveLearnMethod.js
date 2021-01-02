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

module.exports.MoveLearnMethod = new GraphQLObjectType({
    name: 'MoveLearnMethod',
    fields: () => {
      const {Description} = require('./Description');
      const {Name} = require('./Name');
      const {VersionGroupContainer} = require('./VersionGroupContainer');

      return {
          id: { type: GraphQLID },
          name: {
              type: GraphQLString,
              resolve(parentValue, args, res) {
                  return parentValue.name.toUpperCase().replace(/-/g, " ");
              }
          },
          descriptions: { type: new GraphQLList(Description) },
          names: { type: new GraphQLList(Name) },
          version_groups: { type: new GraphQLList(VersionGroupContainer) }
      }
    }
})
