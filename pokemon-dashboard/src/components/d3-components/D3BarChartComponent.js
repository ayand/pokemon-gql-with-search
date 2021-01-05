import * as d3 from 'd3';
import { tip as d3Tip } from "d3-v6-tip";
//import '../css/d3-tip.css';

class D3BarChartComponent {
    constructor(element, props) {
        this.svg = d3.select(element);
        this.props = props;

        const colorDict = {
            "GRASS": "#5DC04E",
            "POISON": "#9328DA",
            "FIRE": "#EC993B",
            "FLYING": "#BAADDE",
            "DRAGON": "#6600CC",
            "WATER": "#2993DA",
            "BUG": "#9DC148",
            "NORMAL": "#C4BEAE",
            "DARK": "#5C4368",
            "ELECTRIC": "#FFDE35",
            "PSYCHIC": "#FF007F",
            "GROUND": "#DFB980",
            "ICE": "#99FFFF",
            "STEEL": "#A0A0A0",
            "FAIRY": "pink",
            "FIGHTING": "#A12C2C",
            "ROCK": "#87632C",
            "GHOST": "#60447C"
        }

        this.tip = d3Tip().attr("class", "d3-tip").html(function(event, d) {
            return `
              <h5><span style="color:${colorDict[d.type]}">${d.type}</span> TYPE</h5>
              <p>Count: ${d.count}</p>
              `
        }).direction('e');

        const typeDict = {
            "GRASS": 0,
            "POISON": 0,
            "FIRE": 0,
            "FLYING": 0,
            "DRAGON": 0,
            "WATER": 0,
            "BUG": 0,
            "NORMAL": 0,
            "DARK": 0,
            "ELECTRIC": 0,
            "PSYCHIC": 0,
            "GROUND": 0,
            "ICE": 0,
            "STEEL": 0,
            "FAIRY": 0,
            "FIGHTING": 0,
            "ROCK": 0,
            "GHOST": 0
        }

        const types = ["GRASS", "POISON", "FIRE", "FLYING", "DRAGON", "WATER", "BUG", "NORMAL", "DARK", "ELECTRIC", "PSYCHIC", "GROUND", "ICE", "STEEL", "FAIRY", "FIGHTING", "ROCK", "GHOST"]



        this.props.pokemon.forEach(pokemon => {
            typeDict[pokemon.type1] += 1;
            if (pokemon.type2 !== "None") {
                typeDict[pokemon.type2] += 1;
            }
        })

        let data = [];

        for (var i = 0; i < types.length; i += 1) {
            const key = types[i];
            data.push({ "type": key, "count": typeDict[key] })
        }


        data.sort((a, b) => b.count - a.count);
        this.svg.call(this.tip);

        const pokemonTypes = data.map(type => type.type);

        const yScale = d3.scaleBand().domain(pokemonTypes).range([60, 440]).paddingInner([0.05]);
        const xScale = d3.scaleLinear().domain([0, d3.max(data, d => d.count)]).range([70, 460])

        this.svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", 70)
            .attr("y", d => yScale(d.type))
            .attr("height", yScale.bandwidth())
            .attr("width", d => xScale(d.count) - xScale(0))
            .attr("fill", d => colorDict[d.type])
            .style("cursor", "pointer")
            .on("mouseover", (event, d) => {
                this.tip.show(event, d);
            })
            .on("mouseout", (event, d) => {
                this.tip.hide();
            })
            .on("click", function(event, d) {
                if (props.types.includes(d.type)) {
                    props.removeType(d.type);
                } else {
                    props.addType(d.type);
                }
            })

        this.svg.append('g')
            .attr('class', 'yAxis')
            .attr('transform', 'translate(70, 0)')
            .call(d3.axisLeft(yScale));

        this.svg.append('g')
            .attr('class', 'yAxis')
            .attr('transform', 'translate(0, 60)')
            .call(d3.axisTop(xScale));

        this.svg.append("text")
            .attr("x", 250)
            .attr("y", 20)
            .style("text-anchor", "middle")
            .style("font-weight", "bold")
            .text("Pokémon Type Count");
    }

    update(element, props) {
        this.svg.selectAll(".bar")
            .on("click", function(event, d) {
                if (props.types.includes(d.type)) {
                    props.removeType(d.type);
                } else {
                    props.addType(d.type);
                }
            })
            .style("opacity", d => (props.types.includes(d.type) || props.types.length === 0) ? 1 : 0.2)
    }
}

export default D3BarChartComponent;
