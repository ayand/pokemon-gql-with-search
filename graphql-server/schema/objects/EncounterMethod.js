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

module.exports.EncounterMethod = new GraphQLObjectType({
    name: 'EncounterMethod',
    fields: () => {
        const {Name} = require('./Name');
        return {
            id: { type: GraphQLID },
            name: {
                type: GraphQLString,
                resolve(parentValue, args) {
                    return parentValue.name.toUpperCase().replace(/-/g, " ");
                }
            },
            names: { type: new GraphQLList(Name) },
            order: { type: GraphQLInt }
        }
    }
})
