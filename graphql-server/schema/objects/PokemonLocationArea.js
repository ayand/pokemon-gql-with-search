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

module.exports.PokemonLocationArea = new GraphQLObjectType({
    name: 'PokemonLocationArea',
    fields: () => {
        const { VersionEncounterDetail } = require('./VersionEncounterDetail');
        const { LocationAreaContainer } = require('./LocationAreaContainer');
        return {
          id: { type: GraphQLID, resolve(parentValue) { return nanoid(); } },
          location_area: { type: LocationAreaContainer },
          version_details: { type: new GraphQLList(VersionEncounterDetail) }
        }
    }
})
