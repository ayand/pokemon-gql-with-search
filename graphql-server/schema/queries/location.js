const graphql = require('graphql');
const { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } = graphql;

const {Location} = require('../objects/Location');

const LocationService = require('../../services/location');

module.exports = {
    location: {
        type: Location,
        args: { id: { type: GraphQLID } },
        resolve(parentValue, { id }, req) {
            return LocationService.getLocation(id);
        }
    }
}
