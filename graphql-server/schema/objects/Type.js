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

module.exports.Type = new GraphQLObjectType({
    name: 'Type',
    fields: () => {
      const PokemonContainer = require('./PokemonContainer').PokemonContainer;
      const MoveDamageClass = require('./MoveDamageClass').MoveDamageClass;
      const TypeContainer = require('./TypeContainer').TypeContainer;

      const PokemonService = require('../../services/pokemon');
      const TypeService = require('../../services/type');
      const MoveDamageClassService = require('../../services/moveDamageClass');

      return {
          id: { type: GraphQLID },
          move_damage_class: {
              type: MoveDamageClass,
              resolve(parentValue, args, res) {
                  const url = parentValue.move_damage_class.url;
                  const components = url.split("/");
                  const id = components[components.length - 2];
                  return MoveDamageClassService.getMoveDamageClass(id);
              }
          },
          name: {
            type: GraphQLString,
            resolve(parentValue, args, res) {
                return parentValue.name.toUpperCase().replace(/-/g, " ");
            }
          },
          double_damage_from: {
              type: new GraphQLList(TypeContainer),
              resolve(parentValue, args, res) {
                  //console.log(parentValue);
                  return parentValue.damage_relations.double_damage_from;
              }
          },
          double_damage_to: {
              type: new GraphQLList(TypeContainer),
              resolve(parentValue, args, res) {
                  //console.log(parentValue);
                  return parentValue.damage_relations.double_damage_to;

              }
          },
          half_damage_from: {
              type: new GraphQLList(TypeContainer),
              resolve(parentValue, args, res) {
                  //console.log(parentValue);
                  return parentValue.damage_relations.half_damage_from;

              }
          },
          half_damage_to: {
              type: new GraphQLList(TypeContainer),
              resolve(parentValue, args, res) {
                  //console.log(parentValue);
                  return parentValue.damage_relations.half_damage_to;

              }
          },
          no_damage_from: {
              type: new GraphQLList(TypeContainer),
              resolve(parentValue, args, res) {
                  //console.log(parentValue);
                  return parentValue.damage_relations.no_damage_from;

              }
          },
          no_damage_to: {
              type: new GraphQLList(TypeContainer),
              resolve(parentValue, args, res) {
                  //console.log(parentValue);
                  return parentValue.damage_relations.no_damage_to;

              }
          },
          pokemon: {
            type: new GraphQLList(PokemonContainer),
            resolve(parentValue, args, res) {
                return parentValue.pokemon;
            }
          }
      }
    }
});
