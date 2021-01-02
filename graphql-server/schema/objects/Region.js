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

module.exports.Region = new GraphQLObjectType({
    name: 'Region',
    fields: () => {
      const Name = require('./Name').Name;
      const VersionGroupContainer = require('./VersionGroupContainer').VersionGroupContainer;
      const LocationContainer = require('./LocationContainer').LocationContainer;
      const GenerationContainer = require('./GenerationContainer').GenerationContainer;
      const PokedexContainer = require('./PokedexContainer').PokedexContainer;

      return {
        id: { type: GraphQLID },
        locations: { type: new GraphQLList(LocationContainer) },
        main_generation: { type: GenerationContainer },
        name: { type: GraphQLString, resolve(parentValue, args, reg) { return parentValue.name.toUpperCase().replace(/-/g, " "); } },
        names: { type: new GraphQLList(Name) },
        pokedexes: { type: new GraphQLList(PokedexContainer) },
        version_groups: { type: new GraphQLList(VersionGroupContainer) }
      }
    }
})
