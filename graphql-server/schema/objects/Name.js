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

const Name = new GraphQLObjectType({
    name: 'Name',
    fields: () => ({
        id: { type: GraphQLID, resolve(parentValue, args, res) { return parentValue.language.name; } },
        language: { type: GraphQLString, resolve(parentValue, args, res) { return parentValue.language.name; } },
        name: { type: GraphQLString, resolve(parentValue, args, res) { return parentValue.name; } }

    })
})

module.exports = Name;
