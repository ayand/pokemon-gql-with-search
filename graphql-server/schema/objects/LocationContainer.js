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

module.exports.LocationContainer = new GraphQLObjectType({
    name: 'LocationContainer',
    fields: () => {
      const Location = require('./Location').Location;
      const LocationService = require('../../services/location');

      return {
          id: {
            type: GraphQLID,
            resolve(parentValue, args) {
                const url = parentValue.url;
                const components = url.split("/");
                const id = components[components.length - 2];
                return id;
            }
          },
          name: {
              type: GraphQLString,
              resolve(parentValue, args) {
                  return parentValue.name.toUpperCase().replace(/-/g, " ");
              }
          },
          location: {
              type: Location,
              resolve(parentValue) {
                  const url = parentValue.url;
                  const components = url.split("/");
                  const id = components[components.length - 2];
                  return LocationService.getLocation(id);
              }
          }
      }
    }
});
