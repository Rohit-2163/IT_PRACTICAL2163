window.onload = function () {
  const state = {
    index: 1,
    fontSize: 15,
    value: 2,
  };
  const getString = function (a, i) {
    return `${a} X ${i} = ${a * i}`;
  };
  const getCardDiv = function (n, i, rgb, fontSize) {
    let div = document.createElement("div");
    let nav = document.getElementById("nav");
    let title = document.getElementById("heading");
    div.classList.add("card");
    div.innerText = getString(n, i);
    div.style.color = rgb;
    div.style.fontSize = `${fontSize}px`;
    nav.style.boxShadow=`0px 2px 3px 0px ${rgb}`;
    title.innerText=`Table of ${n}`
    // title.style.color=rgb;
    // console.log(div);
    return div;
  };
  const getCardHead = function (value) {
    let div = document.createElement("div");
    div.classList.add("cardHead");
    div.innerText = `Table of ${value}`;
    // console.log(div);
    return div;
  };
  const getRandomRgb = function () {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    return `rgb(${a},${b},${c})`;
  };

  setInterval(() => {
    // while (state.index < 11 || state.value != 20) {
      if(state.index < 11 || state.value != 10){   //table control 
        
          if (state.index > 10) {
              state.value += 1;
              state.index = 1;
            }
            const randomRGB = getRandomRgb();
            if (state.index == 1)
            document
        .getElementsByTagName("main")[0]
        .appendChild(getCardHead(state.value));
        document
        .getElementsByTagName("main")[0]
        .appendChild(
            getCardDiv(state.value, state.index, randomRGB, state.fontSize)
            );
            // console.log(document.getElementsByTagName('main')[0]);
            state.index += 1;
            state.fontSize += 0.3;
            //   console.log(state);
            // }
    }
  }, 500);
};
