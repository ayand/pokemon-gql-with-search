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

module.exports.VersionEncounterDetail = new GraphQLObjectType({
    name: 'VersionEncounterDetail',
    fields: () => {
        const {VersionContainer} = require('./VersionContainer');
        const {EncounterDetail} = require('./EncounterDetail');
        return {
          id: { type: GraphQLID, resolve(parentValue) { return nanoid(); } },
          max_chance: { type: GraphQLInt },
          encounter_details: {
              type: new GraphQLList(EncounterDetail)
          },
          version: { type: VersionContainer }
        }
    }
})
