"use strict";

const panels = ["four","nine","two","three","seven","eight","one","six"];

// let obj = JSON.parse(jsonString);
// let wordDataLow = "";
// let wordDataMid = "";
// let wordDataHigh = "";
let currentKP = "";



// get new data every 60 seconds
setInterval(getData, 60000);



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

  // for testing
  // currentKP = "mid";

  let x = 0;
  let x2 = 120;
  let textChunk = "";
  let checkStrays = "";
  const strayChars = [",", ":", ".", ")", " ", "!", "?", "’", "”", "'", "\""];
  for (let panel in panels) {
    
    // DONT FORGET TO UPDATE THESE !!!
    if (currentKP == "low") {
      x = parseInt(Math.random()*(819679-120)); // length of total text - 120;
      while(x > 0 && wordDataLow[x-1] !== " ") {
        // console.log("not a space before:", x, wordDataLow[x-1]);
        x--;  // go to start of a word at beginning
      }
      while(!strayChars.includes(wordDataLow[x+x2])) {
        // console.log("not a space at end:", x2, wordDataLow[x+x2]);
        x2--;  // go to end of a word at end
      }
      textChunk = wordDataLow.substring(x, x + x2);
      // console.log("text: ", textChunk);
    }
    if (currentKP == "mid") {
      x = parseInt(Math.random()*(26038-120)); // length of total text - 120;
      while(x > 0 && wordDataMid[x-1] !== " ") {
        // console.log("not a space before:", x, wordDataLow[x-1]);
        x--;  // go to start of a word at beginning
      }
      while(!strayChars.includes(wordDataMid[x+x2])) {
        // console.log("not a space at end:", x2, wordDataLow[x+x2]);
        x2--;  // go to end of a word at end
      }
      textChunk = wordDataMid.substring(x, x + x2);
    }
    if (currentKP == "high") {
      x = parseInt(Math.random()*(71482-120)); // length of total text - 120;
      while(x > 0 && wordDataHigh[x-1] !== " ") {
        // console.log("not a space before:", x, wordDataLow[x-1]);
        x--;  // go to start of a word at beginning
      }
      while(!strayChars.includes(wordDataHigh[x+x2])) {
        // console.log("not a space at end:", x2, wordDataLow[x+x2]);
        x2--;  // go to end of a word at end
      }
      textChunk = wordDataHigh.substring(x, x + x2);
    }

    // checkStrays = textChunk.charAt(0);
    // if (textChunk.charAt(1) === " " || strayChars.includes(checkStrays)) {
    //   textChunk = textChunk.substring(1);
    // }
    document.getElementById(panels[panel]).innerHTML = textChunk;
    // x += x2;
  }
}

