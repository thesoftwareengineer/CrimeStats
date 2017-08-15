import * as d3 from "d3"
import * as topojson from "topojson"

var projection = d3.geoMercator(),
    path = d3.geoPath(projection);

d3.json("/assets/mx.json", function(err, mx) {
  if (err) throw err
  //console.log(mx)
  var states = topojson.feature(mx, mx.objects.states),
      municipalities = topojson.feature(mx, mx.objects.municipalities);

  projection.fitSize([960, 600], states);

  d3.select("#municipalities")
      .datum(municipalities)
      .attr("d", path);

  d3.select("#states")
      .datum(states)
      .attr("d", path);
});