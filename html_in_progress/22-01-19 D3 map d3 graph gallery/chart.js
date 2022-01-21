// The svg
var svg = d3.select("svg"),
width = +svg.attr("width"),
height = +svg.attr("height");

// Map and projection
var projection = d3
.geoMercator()
.scale(85)
.translate([width / 2, (height / 2) * 1.3]);

// Create data: coordinates of start and end
var link = [
{
  type: "LineString",
  coordinates: [
    [50, 50],
    [-50, -50],
  ],
},
{
  type: "LineString",
  coordinates: [
    [10, -20],
    [-60, -30],
  ],
},
{
  type: "LineString",
  coordinates: [
    [10, -20],
    [130, -30],
  ],
},
];

// A path generator
var path = d3.geoPath().projection(projection);

// Load world shape
d3.json(
"https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson",
function (data) {
  // Draw the map
  svg
    .append("g")
    .selectAll("path")
    .data(data.features)
    .enter()
    .append("path")
    .attr("fill", "#b8b8b8")
    .attr("d", d3.geoPath().projection(projection))
    .style("stroke", "#fff")
    .style("stroke-width", 0);

  // Add the path
  svg
    .selectAll("myPath")
    .data(link)
    .enter()
    .append("path")
    .attr("d", function (d) {
      return path(d);
    })
    .style("fill", "none")
    .style("stroke", "orange")
    .style("stroke-width", 7);
}
);