"use strict";

const panels = ["four","nine","two","three","seven","eight","one","six"];

let goods = index.filter(x => x.mood == "good");
let neuts = index.filter(x => x.mood == "neut");
let bads = index.filter(x => x.mood == "bad");
// console.log(goods.length, goods);
// console.log(neuts.length, neuts);
// console.log(bads.length, bads);

let all = "";

let allsents = function(arr) {
  for(let g in arr) {
    all += arr[g].sentence + " ";
  }
  return all;
}

// console.log(allsents(goods));
// console.log(allsents(neuts));
// console.log(allsents(bads));

let currentKP = "";
// let kpf = 8;  // fake dummy kpf


// get new data every 60 seconds
// setInterval(getData, 60000);
setInterval(getData, 40000);  // 40 seconds



function getData() {

  // kpf comes from fetch.js file
  if (0 <= kpf && kpf <= 3) {
    currentKP = "low";
  }
  if (3 < kpf && kpf <= 6) {
    currentKP = "mid";
  }
  if (6 < kpf && kpf <= 9) {
    currentKP = "high";
  }

  // console.log(kpf, currentKP);

  // for testing
  // currentKP = "mid";

  let gs = allsents(goods);
  let ns = allsents(neuts);
  let bs = allsents(bads);
  let gsl = gs.length;
  let nsl = ns.length;
  let bsl = bs.length;


  let start = 0;
  let end = 120;
  let textChunk = "";
  let checkStrays = "";
  let r = 0;
  let rend = 120;
  const strayChars = [",", ":", ".", ")", " ", "!", "?", "’", "”", "'", "\""];
  for (let panel in panels) {
    if (currentKP == "low") {
      r = Math.floor(Math.random() * (gsl - 120));
      rend = r + 120;
      while(r > 0 && !strayChars.includes(gs[r-1])) {
        r--; 
      }
      while(!strayChars.includes(gs[rend])) {
        rend--; 
      }
      textChunk = gs.substring(r, rend);
      // console.log(textChunk);
    }
    if (currentKP == "mid") {
      r = Math.floor(Math.random() * (nsl - 120));
      rend = r + 120;
      while(r > 0 && !strayChars.includes(ns[r-1])) {
        r--; 
      }
      while(!strayChars.includes(ns[rend])) {
        rend--; 
      }
      textChunk = ns.substring(r, rend);
      // console.log(textChunk);
    }
    if (currentKP == "high") {
      r = Math.floor(Math.random() * (bsl - 120));
      rend = r + 120;
      while(r > 0 && !strayChars.includes(bs[r-1])) {
        r--; 
      }
      while(!strayChars.includes(bs[rend])) {
        rend--; 
      }
      textChunk = bs.substring(r, rend);
      // console.log(textChunk);
    }
    let target = document.getElementById(panels[panel]);
    // target.style.opacity = 0;
    target.innerHTML = textChunk;

    // let opa = 0;
    // function fadetext() { 
    //   if(opa < 1) {
    //     opa += 0.1;
    //     target.style.opacity = opa;
    //     setTimeout(fadetext,200); 
    //   }
    // }
    // fadetext();
  }
}



