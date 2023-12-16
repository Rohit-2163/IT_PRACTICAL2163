let div = document.createElement("div");
let nav = document.getElementById("nav");
let title = document.getElementById("heading");

const getRandomColor = function () {
    let a = Math.floor(Math.random() * 200);
    let b = Math.floor(Math.random() * 200);
    let c = Math.floor(Math.random() * 200);
    return `rgb(${a},${b},${c})`;
  };
var tbl = document.getElementById("content");
var number = 2;
var abc = setInterval(printrow, 2000);
function printrow() {
    let color=getRandomColor();
    // console.log(color);
    div.style.color = color;
    nav.style.boxShadow=`0px 2px 3px 0px ${color}`;
    tbl.style.boxShadow=`0px 2px 3px 0px ${color}`;
    title.innerText=`Table of ${number}`
    // title.style.backgroundColor=color;
  if (number == 10) {
    clearInterval(abc);
  }
  var result = "";
  for (var i = 1; i <= 10; i++) {
    result = result + "<td>" + number + "x" + i + "=" + number * i + "</td>";
  }
  number++;
  var row = document.createElement("tr");
  row.style.color = color;
  row.style.fontSize = number + 12 + "px";
  row.innerHTML = result;
  tbl.append(row);
}
