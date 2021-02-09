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

const {nanoid} = require('nanoid');

module.exports.EncounterDetail = new GraphQLObjectType({
    name: 'EncounterDetail',
    fields: () => {
        const {EncounterMethodContainer} = require('./EncounterMethodContainer');
        return {
            id: { type: GraphQLID, resolve(parentValue) { return nanoid(); } },
            min_level: { type: GraphQLInt },
            max_level: { type: GraphQLInt },
            chance: { type: GraphQLInt },
            method: { type: EncounterMethodContainer }
        }
    }
})
