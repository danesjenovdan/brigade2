<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'

import * as d3 from 'd3';

const props = defineProps<{ selected_username: string }>()

const divRef = ref(null);

const vert_annotations = [
    { date: new Date(2020, 2, 20), text: "Janševa vlada", pres: "Janša", text_date: "13.3.20" }, // color: "#edafab", text_color: "#ff0000"
    //{date: new Date(2012, 1, 10), text: "Janševa vlada", text_date: "10-Feb-2012", color: "#edafab", text_color: "#ff0000"},
    { date: new Date(2022, 3, 24), text: "Vol 22", pres: "Golob", text_date: "24.4.22" },
    { date: new Date(2008, 8, 29), text: "Vol 08", pres: "Pahor", text_date: "29.9.08" },
    { date: new Date(2011, 11, 4), text: "Vol 11", pres: "Janša", text_date: "4.12.11" },
    { date: new Date(2014, 6, 13), text: "Vol 14", pres: "Cerar", text_date: "13.7.14" },
    { date: new Date(2018, 5, 3), text: "Vol 18", pres: "Šarec", text_date: "3.6.18" },
    { date: new Date(2013, 2, 20), text: "Bratušek", pres: "Bratušek", text_date: "20.3.13" },
    { date: new Date(2017, 9, 22), text: "Vol PR", pres: "Pahor", text_date: "22.10.17" },
    { date: new Date(2016, 10, 8), text: "Vol 16", pres: "ZDA Trump", text_date: "8.11.16" },
    { date: new Date(2015, 3, 1), text: "Kriza", pres: "Cerar", text_date: "1.4.15" },
    //{date: new Date(2018, 9, 22), text: "Preds. vol. 2017", text_date: "22-Oct-2018"}
]

async function follower_dist_grid(username: string) {
    let min_date = new Date("2023"), max_date = new Date("2000");

    const order_response = await fetch(`./data/${username}_order.json`);
    const username_order = await order_response.json();

    const cumulative_response = await fetch(`./data/${username}_cumulative.json`);
    const username_cumulative = await cumulative_response.json();

    const registration_response = await fetch(`./data/${username}_registration.json`);
    const username_registration = await registration_response.json();

    const old_vs_new = [];
    const orientation = [];
    const ghosts = [];

    let min_val = 10000
    let max_val = 0;

    let data = username_order.values
        .map((d, i: number) => {
            old_vs_new.push({ x: new Date(d.x), y: d.t.percent_new })
            orientation.push({ x: new Date(d.x), r: d.o.r, l: d.o.l })
            ghosts.push({ x: new Date(d.x), ns: d.no_statuses, nf: d.no_followers })
            d.t.values.forEach(k => {
                k.extent = d3.extent(d.t.values, d => d.y)
                k.idx = i;
                k.time_idx = new Date(d.x)
                let date = new Date(k.x)
                k.x = date
                if (date > max_date) max_date = date;
                if (date < min_date) min_date = date;
                if (k.y > max_val) max_val = k.y;
                if (k.y < min_val) min_val = k.y;

            })
            return {
                time: new Date(d.x),
                values: d.t.values
            }
        })

    const horiz_end = 830
    // const horiz_range = [200, horiz_end]
    const horiz_range = [0, horiz_end]
    const horiz_range_span = horiz_range[1] - horiz_range[0];
    let time_scale = d3.scaleLinear().range([880, 300]);
    let y_val_scale = d3.scaleLinear().range([0, 80]);
    let y_cumul_scale = d3.scaleLinear().range([0, 80]);
    let y_registration_scale = d3.scaleLinear().range([0, 80]);
    let y_perc_new_scale = d3.scaleLinear().range([0, 80]);


    let horiz_time_scale = d3.scaleLinear().range(horiz_range);
    const followers = username_order.values;

    time_scale.domain([min_date, max_date])

    horiz_time_scale.domain(d3.extent(data, d => d.time))
    y_val_scale.domain(d3.extent(followers, d => d.y))
    y_registration_scale.domain(d3.extent(username_registration.values, d => d.y))
    y_perc_new_scale.domain([0, 1])
    y_cumul_scale.domain(d3.extent(username_cumulative.values, d => d.y))

    let div = d3.select(divRef.value);
    div.selectAll("*").remove()
    let svg = div.append("svg")
        .attr("width", 880)
        .attr("height", 250)

    let grid = svg.selectAll("g").data(data).enter();
    let row = grid.append("g");

    let cumulative_chart = svg.selectAll("rect.a").data(username_cumulative.values).enter()
    cumulative_chart
        .append("rect")
        .attr("x", (d, i) => {
            return horiz_time_scale(d.x)
        })
        .attr("y", d => 100 - y_cumul_scale(d.y))
        .attr("width", horiz_range_span / username_cumulative.values.length)
        .attr("height", d => y_cumul_scale(d.y))
        .style("stroke", "white")
        .style("stroke-width", 0.5)
        .style("fill", "#9dc6f5")
    // .on("mouseover", d => console.log(new Date(d.x), d))

    svg.append("text")
        .attr("x", horiz_range[1] + 10)
        .attr("y", 20)
        .text(("" + y_cumul_scale.domain()[1]).slice(0, 5))
        .style("font-size", "0.6em")
        .style("fill", "darkblue")

    svg.append("text")
        .attr("x", horiz_range[1] + 10)
        .attr("y", 100)
        .text(0)
        .style("font-size", "0.6em")
        .style("fill", "darkblue")

    let follower_increase_chart = svg.selectAll("rect.a").data(followers).enter()
    follower_increase_chart
        .append("rect")
        .attr("x", (d, i) => {
            return horiz_time_scale(d.x)
        })
        .attr("y", d => 200 - y_val_scale(d.y))
        .attr("width", horiz_range_span / followers.length)
        .attr("height", d => y_val_scale(d.y))
        .style("stroke", "white")
        .style("stroke-width", 0.5)
        .style("fill", "#f21347")

    svg.append("text")
        .attr("x", horiz_range[1] + 10)
        .attr("y", 120)
        .text(("" + y_val_scale.domain()[1]).slice(0, 5))
        .style("font-size", "0.6em")
        .style("fill", "#f21347")

    svg.append("text")
        .attr("x", horiz_range[1] + 10)
        .attr("y", 200)
        .text(0)
        .style("font-size", "0.6em")
        .style("fill", "#f21347")




    vert_annotations
        .forEach((d, idx) => {

            let x_coord = horiz_time_scale(d.date)
            if (d.date > d3.extent(data, d => d.time)[0]) {
                let line_gen = d3.line()

                const points = [
                    [x_coord, 0],
                    [x_coord, 250]
                ]
                let line_path = line_gen(points);
                svg.append('path')
                    .attr('d', line_path)
                    .style("stroke", d.color !== undefined ? d.color : "#999")
                    .style("stroke-width", 2.5)
                    .style("stroke-dasharray", "1 5");

                svg.append("text")
                    .attr("y", 8)
                    .attr("x", x_coord + 4)
                    .text(d.text)
                    .style("fill", d.color !== undefined ? d.text_color : "#999")
                    .style("font-size", "0.6em")
                    .attr("text-anchor", "start")
                svg.append("text")
                    .attr("y", 18)
                    .attr("x", x_coord + 4)
                    .text(d.text_date)
                    .style("fill", d.color !== undefined ? d.text_color : "#999")
                    .style("font-size", "0.6em")
                    .attr("text-anchor", "start")
                svg.append("text")
                    .attr("y", 28)
                    .attr("x", x_coord + 4)
                    .text(d.pres)
                    .style("fill", d.color !== undefined ? d.text_color : "#000")
                    .style("font-size", "0.6em")
                    .attr("text-anchor", "start")

                svg.append("text")
                    .attr("y", 2078)
                    .attr("x", x_coord + 4)
                    .text(d.text)
                    .style("fill", d.color !== undefined ? d.text_color : "#999")
                    .style("font-size", "0.6em")
                    .attr("text-anchor", "start")
                svg.append("text")
                    .attr("y", 2088)
                    .attr("x", x_coord + 4)
                    .text(d.text_date)
                    .style("fill", d.color !== undefined ? d.text_color : "#999")
                    .style("font-size", "0.6em")
                    .attr("text-anchor", "start")
            }

        })

    svg.append("text")
        .attr("y", 35)
        .attr("x", 10)
        .text("Kumulativno število")
        .style("fill", "#358df2")
        .style("font-size", "0.6em")
        .style("font-family", "Courier New, monospace")
        .attr("text-anchor", "start")
    svg.append("text")
        .attr("y", 45)
        .attr("x", 10)
        .text("sledilcev")
        .style("fill", "#358df2")
        .style("font-size", "0.6em")
        .style("font-family", "Courier New, monospace")
        .attr("text-anchor", "start")

    svg.append("text")
        .attr("y", 135)
        .attr("x", 10)
        .text("Ocenjen mesečni")
        .style("fill", "#f21347")
        .style("font-size", "0.6em")
        .style("font-family", "Courier New, monospace")
        .attr("text-anchor", "start")
    svg.append("text")
        .attr("y", 145)
        .attr("x", 10)
        .text("prirast sledilcev")
        .style("fill", "#f21347")
        .style("font-size", "0.6em")
        .style("font-family", "Courier New, monospace")
        .attr("text-anchor", "start")
    svg.append("text")
        .attr("y", 155)
        .attr("x", 10)
        .text("(v katerem obdobju")
        .style("fill", "#f21347")
        .style("font-size", "0.6em")
        .style("font-family", "Courier New, monospace")
        .attr("text-anchor", "start")
    svg.append("text")
        .attr("y", 165)
        .attr("x", 10)
        .text("je dobil največ sledilcev)")
        .style("fill", "#f21347")
        .style("font-size", "0.6em")
        .style("font-family", "Courier New, monospace")
        .attr("text-anchor", "start")

}

onMounted(() => {
    follower_dist_grid(props.selected_username);
});

onUpdated(() => {
    follower_dist_grid(props.selected_username);
})

</script>

<template>
    <div class="bg-white w-fit overflow-x-auto" ref="divRef">
    </div>
</template>

<style scoped></style>
