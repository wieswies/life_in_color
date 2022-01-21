/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/xy-chart/
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panX",
  wheelY: "zoomX",
  layout: root.verticalLayout
}));


// Add legend
// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.p50,
  x: am5.p50
}))

var colors = chart.get("colors");

// Data
var data = [{
  name: "John",
  startTime: 8,
  endTime: 11,
  columnSettings: {
    stroke: colors.getIndex(1),
    fill: colors.getIndex(1)
  }
}, {
  name: "Joe",
  startTime: 10,
  endTime: 13,
  columnSettings: {
    stroke: colors.getIndex(3),
    fill: colors.getIndex(3)
  }
}, {
  name: "Susan",
  startTime: 11,
  endTime: 18,
  columnSettings: {
    stroke: colors.getIndex(5),
    fill: colors.getIndex(5)
  }
}, {
  name: "Eaton",
  startTime: 15,
  endTime: 19,
  columnSettings: {
    stroke: colors.getIndex(7),
    fill: colors.getIndex(7)
  }
}];


// Create axes
// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
var yAxis = chart.yAxes.push(
  am5xy.CategoryAxis.new(root, {
    categoryField: "name",
    renderer: am5xy.AxisRendererY.new(root, {
      // cellStartLocation: 0.1,
      // cellEndLocation: 0.9
    }),
    tooltip: am5.Tooltip.new(root, {})
  })
);

yAxis.data.setAll(data);

var xAxis = chart.xAxes.push(
  am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererX.new(root, {})
  })
);


// Add series
// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
var series = chart.series.push(am5xy.ColumnSeries.new(root, {
  name: "Income",
  xAxis: xAxis,
  yAxis: yAxis,
  openValueXField: "startTime",
  valueXField: "endTime",
  categoryYField: "name",
  sequencedInterpolation: true
}));

series.columns.template.setAll({
  height: am5.percent(100),
  templateField: "columnSettings",
  tooltipText: "[bold]{name}[/]\n{categoryY}: {valueX}"
});

series.data.setAll(data);

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
series.appear();
chart.appear(1000, 100);