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



module.exports.Generation = new GraphQLObjectType({
    name: 'Generation',
    fields: () => {
      const AbilityContainer = require('./AbilityContainer').AbilityContainer;
      const MoveContainer = require('./MoveContainer').MoveContainer;
      const TypeContainer = require('./TypeContainer').TypeContainer;
      const SpeciesContainer = require('./SpeciesContainer').SpeciesContainer;
      const Name = require('./Name').Name;
      const VersionGroupContainer = require('./VersionGroupContainer').VersionGroupContainer;
      const RegionContainer = require('./RegionContainer').RegionContainer;

      return {
        abilities: { type: new GraphQLList(AbilityContainer) },
        id: { type: GraphQLID },
        main_region: { type: RegionContainer },
        moves: { type: new GraphQLList(MoveContainer) },
        name: { type: GraphQLString, resolve(parentValue, args, reg) { return parentValue.name.toUpperCase().replace(/-/g, " "); } },
        names: { type: new GraphQLList(Name) },
        pokemon_species: { type: new GraphQLList(SpeciesContainer) },
        types: { type: new GraphQLList(TypeContainer) },
        version_groups: { type: new GraphQLList(VersionGroupContainer) }
      }
    }
})
