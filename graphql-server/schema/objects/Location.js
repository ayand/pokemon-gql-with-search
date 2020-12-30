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

const LocationAreaContainer = require('./LocationAreaContainer');
const GameIndex = require('./GameIndex');
const Name = require('./Name');
const RegionContainer = require('./RegionContainer');

const Location = new GraphQLObjectType({
    name: 'Location',
    fields: () => ({
        game_indices: { type: new GraphQLList(GameIndex) },
        id: { type: GraphQLID },
        location_areas: {
            type: new GraphQLList(LocationAreaContainer),
            resolve(parentValue, args) {
                return parentValue.areas;
            }
        },
        name: {
            type: GraphQLString,
            resolve(parentValue, args) {
                return parentValue.name.toUpperCase().replace(/-/g, " ");
            }
        },
        names: { type: new GraphQLList(Name) },
        region: { type: RegionContainer }
    })
})

module.exports = Location;
