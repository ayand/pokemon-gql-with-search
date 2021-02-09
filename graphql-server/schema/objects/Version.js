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

module.exports.Version = new GraphQLObjectType({
    name: 'Version',
    fields: () => {
        const { Name } = require('./Name');
        const { VersionGroupContainer } = require('./VersionGroupContainer');
        return {
            id: { type: GraphQLID },
            name: {
              type: GraphQLString,
              resolve(parentValue, args, res) {
                  return parentValue.name.toUpperCase().replace(/-/g, " ");
              }
            },
            names: {
                type: new GraphQLList(Name)
            },
            version_group: { type: VersionGroupContainer }
        }
    }
})
