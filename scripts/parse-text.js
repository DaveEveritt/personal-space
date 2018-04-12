(function(){
  // let wordData = document.getElementById("words");

  // parses the JSON-formatted string from the file into a JavaScript object
  let obj = JSON.parse(jsonString);
  let wordData = "";
  
  for (key in obj.words) {
    let text = obj.words[key].text.substring(0, 80);
    wordData += `${obj.words[key].file}\n${obj.words[key].title}\n${text}\n\n`;
  }
  console.log(wordData);
  // demoData.innerHTML = wordData;
}());
 
/*
id 0
file "text",
title "text",
created_date "2018-02-03 14:28:35",
text "text",
images "resources/FILENAME.EXT"
*/
