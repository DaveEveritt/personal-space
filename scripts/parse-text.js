(function(){
  // let wordData = document.getElementById("words");
  const panels = ["four","nine","two","three","seven","eight","one","six"];

  let obj = JSON.parse(jsonString);
  let wordData = "";

  window.addEventListener("load", getData);
  
  function getData() {
    // alert("hello");
    for (key in obj.words) {
      let text = obj.words[key].text;
      // let text = obj.words[key].text.substring(0, 55);
      wordData += ` ${text}`;
      wordData += `${obj.words[key].created_date}:\n${text}\n\n`;
    }
    console.log(`${wordData}`);
    
    let x = 0;
    let x2 = 60;
    for (panel in panels) {
      // 10000 is a guess, need exact number
      x = parseInt(Math.random()*938772);
      console.log(x + "\n");
      document.getElementById(panels[panel]).innerHTML = wordData.substring(x, x + x2);
      x += x2;
      x2 += x2;
    }
  }

  setInterval(function(){
    getData();
  }, 200000);
  
}());

/*
id 0
file "text",
title "text",
created_date "2018-02-03 14:28:35",
text "text",
images "resources/FILENAME.EXT"
will fit (55chars):
And you have read my mind again Alice in these prompts!
*/
