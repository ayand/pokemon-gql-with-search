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

const Pokemon = require('./Pokemon');
const MoveDamageClass = require('./MoveDamageClass');

const PokemonService = require('../../services/pokemon');
const TypeService = require('../../services/type');
const MoveDamageClassService = require('../../services/moveDamageClass');

const Type = new GraphQLObjectType({
    name: 'Type',
    fields: () => ({
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
              return parentValue.name.toUpperCase().replace("-", " ");
          }
        },
        double_damage_from: {
            type: new GraphQLList(Type),
            resolve(parentValue, args, res) {
                //console.log(parentValue);
                const ids = parentValue.damage_relations.double_damage_from.map(d => d.url).map(d => { const components = d.split("/"); return components[components.length - 2]; });
                return TypeService.getTypes(ids);
            }
        },
        double_damage_to: {
            type: new GraphQLList(Type),
            resolve(parentValue, args, res) {
                //console.log(parentValue);
                const ids = parentValue.damage_relations.double_damage_to.map(d => d.url).map(d => { const components = d.split("/"); return components[components.length - 2]; });
                return TypeService.getTypes(ids);
            }
        },
        half_damage_from: {
            type: new GraphQLList(Type),
            resolve(parentValue, args, res) {
                //console.log(parentValue);
                const ids = parentValue.damage_relations.half_damage_from.map(d => d.url).map(d => { const components = d.split("/"); return components[components.length - 2]; });
                return TypeService.getTypes(ids);
            }
        },
        half_damage_to: {
            type: new GraphQLList(Type),
            resolve(parentValue, args, res) {
                //console.log(parentValue);
                const ids = parentValue.damage_relations.half_damage_to.map(d => d.url).map(d => { const components = d.split("/"); return components[components.length - 2]; });
                return TypeService.getTypes(ids);
            }
        },
        no_damage_from: {
            type: new GraphQLList(Type),
            resolve(parentValue, args, res) {
                //console.log(parentValue);
                const ids = parentValue.damage_relations.no_damage_from.map(d => d.url).map(d => { const components = d.split("/"); return components[components.length - 2]; });
                return TypeService.getTypes(ids);
            }
        },
        no_damage_to: {
            type: new GraphQLList(Type),
            resolve(parentValue, args, res) {
                //console.log(parentValue);
                const ids = parentValue.damage_relations.no_damage_to.map(d => d.url).map(d => { const components = d.split("/"); return components[components.length - 2]; });
                return TypeService.getTypes(ids);
            }
        },
        pokemon: {
          type: new GraphQLList(Pokemon),
          resolve(parentValue, args, res) {
              const ids = parentValue.pokemon.map(d => d.pokemon.url).map(d => { const components = d.split("/"); return components[components.length - 2]; });
              return PokemonService.getPokemons(ids);
          }
        }
    })
});

module.exports = Type;
