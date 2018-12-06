"use strict";

const panels = ["four","nine","two","three","seven","eight","one","six"];

let goods = index.filter(x => x.mood == "good");
let neuts = index.filter(x => x.mood == "neut");
let bads = index.filter(x => x.mood == "bad");
// console.log(goods.length, goods);
// console.log(neuts.length, neuts);
// console.log(bads.length, bads);

let currentKP = "";



// get new data every 60 seconds
// setInterval(getData, 60000);
setInterval(getData, 10000);



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

  console.log(kpf, currentKP);

  // for testing
  // currentKP = "mid";

  let start = 0;
  let end = 120;
  let textChunk = "";
  let checkStrays = "";
  const strayChars = [",", ":", ".", ")", " ", "!", "?", "’", "”", "'", "\""];
  for (let panel in panels) {
    
    if (currentKP == "low") {
      let rand = Math.floor(Math.random() * goods.length);
      textChunk = goods[rand].sentence.substring(0, 120);
      console.log("low", textChunk);
    }
    if (currentKP == "mid") {
      let rand = Math.floor(Math.random() * neuts.length);
      textChunk = neuts[rand].sentence.substring(0, 120);
      console.log("mid", textChunk);
    }
    if (currentKP == "high") {
      let rand = Math.floor(Math.random() * bads.length);
      textChunk = bads[rand].sentence.substring(0, 120);
      console.log("high", textChunk);
    }

    document.getElementById(panels[panel]).innerHTML = textChunk;
  }
}

