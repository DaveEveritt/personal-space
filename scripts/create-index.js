"use strict";

// ONLY RUN THIS ONCE IF CORPUS CHANGES

const category = {
  "good": ["lov", "brill", "wonderful", "sex", "tidy", "excit", "respect", "pleasur", "art", "transcend", "beaut", "gentle", "success", "compassion", "hope", "kind", "nurture", "help", "smil", "beautiful", "comfort", "focus", "desir", "energ", "trust", "proud", "appreciat", "affect", "empath", "brave", "hug", "nourish", "friend", "relax", "like", "nest", "close", "happ", "together", "womb", "truth", "touch", "permiss", "grow", "clear", "birth", "play", "young", "wisdom", "gain", "surprise", "humour"],

  "neut": ["realis", "activ", "danc", "doubt", "unusual", "quirky", "torn", "action", "secret", "endur", "mov", "inabil", "entangl", "sacrif", "scatt", "confus", "limit", "disinterest", "ignor", "hid", "risk", "late", "odd", "obstacle", "hindrance", "lonely", "sorrow", "sudden", "strange", "confus", "love/hate", "mother", "father", "potential", "body", "transform", "synchron", "surprise", "alert"],

  "bad": ["naught", "hurt", "hideous", "hatred", "pain", "power", "never", "rage", "fierce", "fight", "repugnant", "negative", "destruct", "fail", "forbid", "cold", "reject", "dead", "mad", "depress", "mistake", "kill", "war", "hospital", "funeral", "died", "attack", "hate", "sad", "fuck", "cry", "bleed", "strong", "abandon", "lone", "punch", "worry", "dark", "loss", "theft", "empty", "offend", "boundar", "insecur", "los", "decay", "stress", "loath", "fear", "conceal", "immatur"]
}

let obj = JSON.parse(jsonString);
let index = [{
  "mood": "none",
  "sentence": "Hello World"
}];

// console.log(obj);

console.log("number of diary entries: ", obj.words.length);

for(let key in obj.words) {

  let text = obj.words[key].text;
  let sents = nlp(text).sentences().data();

  for(let s in sents) {
    console.log(`${key}.${s}`);

    let sentence = sents[s].text;
    let mood = getMood(sentence);

    if(mood !== "none") {
      let item = {
        "mood": mood,
        "sentence": sentence
      };
      index.push(item);
    }
  }
}

console.log("let index = ", JSON.stringify(index));




function getMood(sentence) {

  let good = 0;
  let neut = 0;
  let bad = 0;

  for (let w in category.good) {
    if ((sentence.toLowerCase()).includes(category.good[w])){
      good += 1;
    }
  }

  for (let w in category.neut) {
    if ((sentence.toLowerCase()).includes(category.neut[w])){
      neut += 1;
    }
  }

  for (let w in category.bad) {
    if ((sentence.toLowerCase()).includes(category.bad[w])){
      bad += 1;
    }
  }
  // console.log(low, mid, high);

  let overall = good == neut && neut == bad ? "none" :
                Math.max(good,neut,bad) == good ? "good" : 
                Math.max(good,neut,bad) == neut ? "neut" : 
                Math.max(good,neut,bad) == bad ? "bad" : 
                "none";

  return overall;
}
