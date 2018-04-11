const CHART = document.getElementById("piechart_3d");
const SIZE = 800;
const UNITS = 14;
const PART = 100 / 14;
const SECTOR = 360 / UNITS;
const HALF_SECTOR = -SECTOR / 2;
const angle = {
  current: HALF_SECTOR
};

google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn("string", "Fragrace");
  data.addColumn("number", "Notes");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    ["Oriental", PART, "Oriental, Resing"],
    ["Woody Oriental", PART, "Sandalwood, Patchouli"],
    ["Woods", PART, "Aromatic Woods, Vetiver"],
    ["Mossy Woods", PART, "Oakmoss, Amber"],
    ["Dry Woods", PART, "Dry Woods, Leather"],
    ["Aromatic", PART, "Lavender, Aromatic Herbs"],
    ["Citrus", PART, "Bergamot, Citrus Oils"],
    ["Water", PART, "Marine, Aquatic Notes"],
    ["Green", PART, "Galbanum, Green Notes"],
    ["Fruity", PART, "Berries, Fruits"],
    ["Floral", PART, "Fresh Cut, Flowers"],
    ["Soft Floral", PART, "Aldehydes, Powdery Notes"],
    ["Floral Oriental", PART, "Orange Blossom, Sweet Spices"],
    ["Soft Oriental", PART, "Incense, Amber"]
  ]);

  const options = {
    title: "Fragrance",
    // title: null,
    width: SIZE,
    height: SIZE,
    animation: {
      duration: 3000,
      easing: "in"
    },
    pieHole: 0.5,
    legend: "none",
    colors: [
      "#9a042f",
      "#b5560d",
      "#c08a39",
      "#44745c",
      "#8b8450",
      "#564D82",
      "#ffdd00",
      "#008ec2",
      "#7db955",
      "#ec7804",
      "#e6362d",
      "#eb6ba0",
      "#e0007b",
      "#c71f81"
    ],
    pieSliceText: "label",
    pieStartAngle: angle.current,
    tooltip: {
      isHtml: true
    }
    // animation: { startup: true }
  };
  const chart = new google.visualization.PieChart(CHART);

  function selectHandler() {
    let selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      let topping = data.getValue(selectedItem.row, 0);
      console.log(selectedItem.row);
      // console.log(topping);
      // angle.current = -selectedItem.row * SECTOR + SECTOR * 3;
      drawChart();
      // const sorted = LR.filter(elem => elem[1] === topping);
      // console.log(sorted);
      fillList(parfumes[`${selectedItem.row}`], elemList);
      // showList(sorted.map(elem => new Parfume(elem)));
    }
  }

  google.visualization.events.addListener(chart, "select", selectHandler);

  chart.draw(data, options);
  Title_center();
}

function Title_center() {
  const title_chart = document.querySelector(
    "#piechart_3d svg > g:nth-child(3) > text"
  );
  title_chart.setAttribute("dx", "158");
  title_chart.setAttribute("dy", "285");
  title_chart.style.fontSize = "36px";
  title_chart.style.fill = "orangered";
}
