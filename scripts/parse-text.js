"use strict";

// (function(){

  const panels = ["four","nine","two","three","seven","eight","one","six"];

  let obj = JSON.parse(jsonString);
  let wordDataLow = "";
  let wordDataMid = "";
  let wordDataHigh = "";
  let currentKP = "";


  // ==============================================

  // RUN THIS AGAIN IF UPDATING THE CATEGORIES. 
  // COPY CONSOLE LOG FROM LINES 126+127 TO NEW.JS FILE

  // window.addEventListener("load", processData);

  // ========================================================


  const category = {
    "low": ["lov", "brill", "wonderful", "sex", "tidy", "excit", "respect", "pleasur", "art", "transcend", "beaut", "gentle", "success", "compassion", "hope", "kind", "nurture", "help", "smil", "beautiful", "comfort", "focus", "desir", "energ", "trust", "proud", "appreciat", "affect", "empath", "brave", "hug", "nourish", "friend", "relax", "like", "nest", "close", "happ", "together", "womb", "truth", "touch", "permiss", "grow", "clear", "birth", "play", "young", "wisdom", "gain", "surprise", "humour"],

    "mid": ["realis", "activ", "danc", "doubt", "unusual", "quirky", "torn", "action", "secret", "endur", "mov", "inabil", "entangl", "sacrif", "scatt", "confus", "limit", "disinterest", "ignor", "hid", "risk", "late", "odd", "obstacle", "hindrance", "lonely", "sorrow", "sudden", "strange", "confus", "love/hate", "mother", "father", "potential", "body", "transform", "synchron", "surprise", "alert"],

    "high": ["naught", "hurt", "hideous", "hatred", "pain", "power", "never", "rage", "fierce", "fight", "repugnant", "negative", "destruct", "fail", "forbid", "cold", "reject", "dead", "mad", "depress", "mistake", "kill", "war", "hospital", "funeral", "died", "attack", "hate", "sad", "fuck", "cry", "bleed", "strong", "abandon", "lone", "punch", "worry", "dark", "loss", "theft", "empty", "offend", "boundar", "insecur", "los", "decay", "stress", "loath", "fear", "conceal", "immatur"]
  }

  // 0-1 quiet, 2-4 unsettled/active, 5 minor storm, 6 larger storm, 7-9 major storm



  function processData() {
    
    let wordsFound = {};
    let str;

    for (let key in obj.words) {
      let text = obj.words[key].text;
      obj.words[key].lowCount = 0;
      obj.words[key].midCount = 0;
      obj.words[key].highCount = 0;
      wordsFound[key] = [];

      for (let w in category.low) {
        if ((text.toLowerCase()).includes(category.low[w])){
          obj.words[key].lowCount += 1;
          wordsFound[key].push(category.low[w]);
        }
      }

      for (let w in category.mid) {
        if ((text.toLowerCase()).includes(category.mid[w])){
          obj.words[key].midCount += 1;
          wordsFound[key].push(category.mid[w]);
        }
      }

      for (let w in category.high) {
        if ((text.toLowerCase()).includes(category.high[w])){
          obj.words[key].highCount += 1;
          wordsFound[key].push(category.high[w]);
        }
      }

      let lc = obj.words[key].lowCount;
      let mc = obj.words[key].midCount;
      let hc = obj.words[key].highCount;

      if (lc==mc && mc==hc) { obj.words[key].overallMood = "mid" }
      if (Math.max(lc,mc,hc) == lc) { obj.words[key].overallMood = "low" }
      if (Math.max(lc,mc,hc) == mc) { obj.words[key].overallMood = "mid" } 
      if (Math.max(lc,mc,hc) == hc) { obj.words[key].overallMood = "high" }
      if (lc==0 && mc==0 && hc==0) { obj.words[key].overallMood = "none" }

      wordsFound[key].mood = obj.words[key].overallMood;

      console.log(key, obj.words[key].id, lc,mc,hc, "max:", Math.max(lc,mc,hc), wordsFound[key].mood);

    }

    // str = JSON.stringify(obj);
    // console.log(str);

  }


  // needs to be outside of the processData function
  for (let key in obj.words) {
    let text = obj.words[key].text;
    let mood = obj.words[key].overallMood;
    if (mood == "low") {
      wordDataLow += `${text}\n\n`;
    }
    if (mood == "mid") {
      wordDataMid += `${text}\n\n`;
    }
    if (mood == "high") {
      wordDataHigh += `${text}\n\n`;
    }
  }

  // console.log("low:", wordDataLow.length);
  // console.log("mid:", wordDataMid.length);
  // console.log("high:", wordDataHigh.length);


  function getData() {

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
    const strayChars = [",", ":", ".", ")", " ", "'", "\""];
    for (let panel in panels) {
      
      // DONT FORGET TO UPDATE THESE !!!
      if (currentKP == "low") {
        x = parseInt(Math.random()*(819679-120)); // length of total text - 120;
        textChunk = wordDataLow.substring(x, x + x2);
      }
      if (currentKP == "mid") {
        x = parseInt(Math.random()*(26038-120)); // length of total text - 120;
        textChunk = wordDataMid.substring(x, x + x2);
      }
      if (currentKP == "high") {
        x = parseInt(Math.random()*(71482-120)); // length of total text - 120;
        textChunk = wordDataHigh.substring(x, x + x2);
      }

      checkStrays = textChunk.charAt(0);
      if (textChunk.charAt(1) === " " || strayChars.includes(checkStrays)) {
        textChunk = textChunk.substring(1);
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
