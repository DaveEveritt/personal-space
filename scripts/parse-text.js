(function(){
  const panels = ["four","nine","two","three","seven","eight","one","six"];

  let obj = JSON.parse(jsonString);
  let wordData = "";

  window.addEventListener("load", getData);
  
  for (key in obj.words) {
    let text = obj.words[key].text;
    wordData += `${obj.words[key].created_date}:\n${text}\n\n`;
  }
  // console.log(`${wordData}`);
  
  function getData() {
    let x = 0;
    let x2 = 120;
    for (panel in panels) {
      x = parseInt(Math.random()*938772);
      // console.log(`x=${x}, x2=${x2}\n`);
      document.getElementById(panels[panel]).innerHTML = wordData.substring(x, x + x2);
      x += x2;
    }
  }

  setInterval(function(){
    getData();
  }, 20000);
  
}());

/*
id 0
file "text",
title "text",
created_date "2018-02-03 14:28:35",
text "text",
will fit (55chars):
And you have read my mind again Alice in these prompts!
*/
