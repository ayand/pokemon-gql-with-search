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

const Description = new GraphQLObjectType({
    name: 'Description',
    fields: () => ({
        id: { type: GraphQLID, resolve(parentValue, args) { return parentValue.language.name; } },
        language: { type: GraphQLString, resolve(parentValue, args) { return parentValue.language.name; } },
        description: { type: GraphQLString }
    })
})

module.exports = Description;
