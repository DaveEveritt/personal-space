"use strict";


let obj = JSON.parse(jsonString);
let wordDataLow = "";
let wordDataMid = "";
let wordDataHigh = "";
// let currentKP = "";

// console.log(obj);

// var doc = nlp('dinosaur')

// var str = doc.nouns().toPlural().out('text')
// console.log(str)
// 'dinosaurs'

// console.log(nlp('hi everybody! Hi Dr. Nick!').sentences().data());
//[{normal:'hi everybody'}, {normal:'hi dr nick'}]


// for (let key in obj.words) {
  let text = obj.words[111].text;
  console.log(text);
  console.log(nlp(text).topics().slice(0, 50).out('frequency'));
  console.log(nlp(text).sentences().data());

  console.log("-----------------------------------------");
// }


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

// function processData() {
  
//   let wordsFound = {};
//   let str;

//   for (let key in obj.words) {
//     let text = obj.words[key].text;
//     obj.words[key].lowCount = 0;
//     obj.words[key].midCount = 0;
//     obj.words[key].highCount = 0;
//     wordsFound[key] = [];

//     for (let w in category.low) {
//       if ((text.toLowerCase()).includes(category.low[w])){
//         obj.words[key].lowCount += 1;
//         wordsFound[key].push(category.low[w]);
//       }
//     }

//     for (let w in category.mid) {
//       if ((text.toLowerCase()).includes(category.mid[w])){
//         obj.words[key].midCount += 1;
//         wordsFound[key].push(category.mid[w]);
//       }
//     }

//     for (let w in category.high) {
//       if ((text.toLowerCase()).includes(category.high[w])){
//         obj.words[key].highCount += 1;
//         wordsFound[key].push(category.high[w]);
//       }
//     }

//     let lc = obj.words[key].lowCount;
//     let mc = obj.words[key].midCount;
//     let hc = obj.words[key].highCount;

//     if (lc==mc && mc==hc) { obj.words[key].overallMood = "mid" }
//     if (Math.max(lc,mc,hc) == lc) { obj.words[key].overallMood = "low" }
//     if (Math.max(lc,mc,hc) == mc) { obj.words[key].overallMood = "mid" } 
//     if (Math.max(lc,mc,hc) == hc) { obj.words[key].overallMood = "high" }
//     if (lc==0 && mc==0 && hc==0) { obj.words[key].overallMood = "none" }

//     wordsFound[key].mood = obj.words[key].overallMood;

//     console.log(key, obj.words[key].id, lc,mc,hc, "max:", Math.max(lc,mc,hc), wordsFound[key].mood);

//   }

//   // str = JSON.stringify(obj);
//   // console.log(str);

// }



// // needs to be outside of the processData function
// for (let key in obj.words) {
//   let text = obj.words[key].text;
//   let mood = obj.words[key].overallMood;
//   if (mood == "low") {
//     wordDataLow += `${text}\n\n`;
//   }
//   if (mood == "mid") {
//     wordDataMid += `${text}\n\n`;
//   }
//   if (mood == "high") {
//     wordDataHigh += `${text}\n\n`;
//   }
// }

// console.log("low:", wordDataLow.length);
// console.log("mid:", wordDataMid.length);
// console.log("high:", wordDataHigh.length);

