// Modules
let d3 = require('D3')
require('chibijs')

// Globals
let dots = []
let $sqr = $(".box.coords")
let $lines = $(".box.lines")
let $result = $(".result")
let $clear = $(".clear")
let $curve = $(".curve")
let curveList = [
  {"curve":d3.curveLinear,"title":"Linear"},
  {"curve":d3.curveStep,"title":"Step"},
  {"curve":d3.curveBasis,"title":"Basis"},
  {"curve":d3.curveBundle,"title":"Bundle"},
  {"curve":d3.curveCardinal.tension(0.5),"title":"Cardinal"},
  {"curve":d3.curveMonotoneX,"title":"MonotoneX"},
  {"curve":d3.curveCatmullRom.alpha(0.5),"title":"CatmullRom"},
  {"curve":d3.curveNatural,"title":"Natural"}
];
let curveInd = 0

// Helper Functions
let randColor = () => {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

let makeDot = (x, y) => {
  return `<div class="dot-position" style="left:${x-3}px;top:${y-3}px;"><div class="dot"></div></div>`
} 

let printResults = () => {
  let print = dots.length > 0 ? JSON.stringify(dots) : ""
  $result.html(print)
}

let printLines = () => {
  $lines.html("")
  let lineFunction = d3.line()    
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; })
    .curve(curveList[curveInd].curve);  

  let container = d3.select(".box.lines").append("svg")
    .attr("preserveAspectRatio", "none")
    .attr("viewBox", "0 0 500 500")

  let line = container.append("path")
    .attr("d", lineFunction(dots))
    .attr("stroke", "#000000")
    .attr("stroke-width", 2)
    .attr("fill", "none")
}

// Main
$().ready(() => {
	$sqr.on("click", e => {
    dots.push({x: e.offsetX, y: e.offsetY})
    $sqr.htmlAppend(makeDot(e.offsetX, e.offsetY))
    printResults()
    if (dots.length > 1) printLines()
  })
  $clear.on("click", e => {
    $sqr.html("")
    $lines.html("")
    dots = []
    printResults()
  })
  $curve.on("click", e => {
    if (curveInd < curveList.length - 1) curveInd++
    else curveInd = 0
    console.log(curveInd)
    $curve.html(`Curve Fn: ${curveList[curveInd].title}`)
    if (dots.length > 1) printLines()
  })
});