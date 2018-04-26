"use strict";

// (function(){

  const panels = ["four","nine","two","three","seven","eight","one","six"];

  let obj = JSON.parse(jsonString);
  let wordData = "";
  let wordDataFiltered = "";
  let wordDataLow = "";
  let wordDataMid = "";
  let wordDataHigh = "";
  let currentKP = "";


  // window.addEventListener("load", getData);

  // ==============================================

  // RUN THIS AGAIN IF UPDATING THE CATEGORIES. COPY CONSOLE LOG FROM LINE 113+114 TO NEW.JS FILE

  // window.addEventListener("load", processData);

  // ========================================================


  for (let key in obj.words) {
    let text = obj.words[key].text;
    let mood = obj.words[key].overallMood;

    // console.log(mood, mood == "low");

    if (mood == "low") {
      wordDataLow += `${text}\n\n`;
    }
    if (mood == "mid") {
      wordDataMid += `${text}\n\n`;
    }
    if (mood == "high") {
      wordDataHigh += `${text}\n\n`;
    }
    // wordData += `${obj.words[key].created_date}:\n${text}\n\n`;
  }
  // console.log("low:", wordDataLow.length, wordDataLow);
  // console.log("mid:", wordDataMid.length, wordDataMid);
  // console.log("high:", wordDataHigh.length, wordDataHigh);


  // for (let key in obj.words) {
  //   let text = obj.words[key].text;
  //   // console.log(text);
  //   wordData += `${text}\n\n`;
  //   // wordData += `${obj.words[key].created_date}:\n${text}\n\n`;
  // }
  
  // console.log(`${wordData}`);
  // console.log(`${wordData.length}`); // 920404
  

  let category = {
    "low": ["lov", "brill", "wonderful", "sex", "tidy", "excit", "respect", "pleasur", "art", "transcend", "beaut", "gentle", "success", "compassion", "hope", "kind", "nurture", "help", "smil", "beautiful", "comfort", "focus", "desir", "energ", "trust", "proud", "appreciat", "affect", "empath"],
    "mid": ["realisation", "activism", "dance", "doubt", "unusual", "quirky", "torn", "action", "secret", "endurance", "movement", "inability", "entangled", "sacrifice", "scattered", "confused", "limit", "disinterest", "irgnoring", "hidden", "risk", "late"],
    "high": ["naughty", "hurting", "hideous", "hatred", "pain", "power", "never", "rage", "fierce", "fight", "repugnant", "negative", "destructive", "failure", "forbidding", "cold", "rejection", "dead", "mad", "depressed"]
  }

  // 0-1 quiet, 2-4 unsettled/active, 5 minor storm, 6 larger storm, 7-9 major storm


  function processData() {
    
    let wordsFound = {};
    let str;

    for (let key in obj.words) {
      let text = obj.words[key].text;
      obj.words[key].mood = "";
      obj.words[key].lowCount = 0;
      obj.words[key].midCount = 0;
      obj.words[key].highCount = 0;
      wordsFound[key] = [];

      for (let w in category.low) {
        if (text.includes(category.low[w])){
          obj.words[key].mood += "low";
          obj.words[key].lowCount += 1;
          wordsFound[key].push(category.low[w]);
        }
      }

      for (let w in category.mid) {
        if (text.includes(category.mid[w])){
          obj.words[key].mood += "mid";
          obj.words[key].midCount += 1;
          wordsFound[key].push(category.mid[w]);
        }
      }

      for (let w in category.high) {
        if (text.includes(category.high[w])){
          obj.words[key].mood += "high";
          obj.words[key].highCount += 1;
          wordsFound[key].push(category.high[w]);
        }
      }

      if (obj.words[key].mood === "") {
        obj.words[key].mood = "none";
      }

      let lc = obj.words[key].lowCount;
      let mc = obj.words[key].midCount;
      let hc = obj.words[key].highCount;

      if (Math.max(lc,mc,hc) == lc) { obj.words[key].overallMood = "low" }
      if (Math.max(lc,mc,hc) == mc) { obj.words[key].overallMood = "mid" } 
      if (Math.max(lc,mc,hc) == hc) { obj.words[key].overallMood = "high" }
      if (lc==0 && mc==0 && hc==0) { obj.words[key].overallMood = "none" }

      wordsFound[key].mood = obj.words[key].overallMood;

      console.log(key, lc,mc,hc, "max:", Math.max(lc,mc,hc), wordsFound[key].mood);

    }

    // console.log(obj.words);
    // str = JSON.stringify(obj);
    // console.log(str);
    // console.log(wordsFound);

    // console.log(wordDataFiltered);

  }
  






  function getData() {

    // console.log("parse-text", kpf);

    if (0 <= kpf && kpf <= 3) {
      // console.log("low", kpf);
      currentKP = "low";
    }
    if (3 < kpf && kpf <= 6) {
      // console.log("mid", kpf);
      currentKP = "mid";
    }
    if (6 < kpf && kpf <= 9) {
      // console.log("high", kpf);
      currentKP = "high";
    }

    let x = 0;
    let x2 = 120;
    let textChunk = "";
    let checkStrays = "";
    const strayChars = [",", ":", ".", ")", " "];
    for (let panel in panels) {

      

      if (currentKP == "low") {
        x = parseInt(Math.random()*721605); // length of total text - 120;
        textChunk = wordDataLow.substring(x, x + x2);
      }
      if (currentKP == "mid") {
        x = parseInt(Math.random()*60884); // length of total text - 120;
        textChunk = wordDataMid.substring(x, x + x2);
      }
      if (currentKP == "high") {
        x = parseInt(Math.random()*128435); // length of total text - 120;
        textChunk = wordDataHigh.substring(x, x + x2);
      }


      // x = parseInt(Math.random()*920284); // length of total text - 120
      // console.log(`x=${x}, x2=${x2}\n`);
      // textChunk = wordData.substring(x, x + x2);
      checkStrays = textChunk.charAt(0);
      if (textChunk.charAt(1) === " " || strayChars.includes(checkStrays)) {
        textChunk = textChunk.substring(1);
        // console.log(textChunk);
      }
      document.getElementById(panels[panel]).innerHTML = textChunk;
      x += x2;
    }
  }

  setInterval(function(){
    getData();
  }, 80000);
  
// }());

/*
id 0
file "text",
title "text",
created_date "2018-02-03 14:28:35",
text "text",
will fit (55chars):
And you have read my mind again Alice in these prompts!

charAt() for multilingual plane
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
*/
