import requests
import json
import os

if not os.path.exists("./data"):
    os.makedirs("./data")

# Get a list of Pokemon
pokemon_total_count = requests.get("https://pokeapi.co/api/v2/pokemon").json()['count']

pokemons = []
offset=0
while len(pokemons) != pokemon_total_count:
    pokemonResults = requests.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset={}".format(offset)).json()
    for result in pokemonResults["results"]:
        url = result["url"]
        i = url.split("/")[-2]
        pokemon = requests.get(url).json()
        datum = {}
        datum["id"] = pokemon["id"]
        datum["name"] = pokemon["name"].upper().replace("-", " ")
        for stat in pokemon["stats"]:
            stat_name = stat["stat"]["name"].replace("-", "_")
            stat_val = stat["base_stat"]
            datum[stat_name] = stat_val
        datum["species"] = pokemon['species']['url'].split("/")[-2]
        for type in pokemon["types"]:
            datum["type" + str(type["slot"])] = type["type"]["name"].upper()
        if len(pokemon["types"]) == 1:
            datum["type2"] = None
        pokemons.append(datum)
        print("Done with Pokemon # {}".format(i))
    offset += 100

with open("./data/pokemon.json", "w") as outFile:
    json.dump(pokemons, outFile, indent=2)

print("Done with Pokemon")
