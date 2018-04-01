(function(){
  // let wordData = document.getElementById("words");

  // parses the JSON-formatted string from the file into a JavaScript object
  let obj = JSON.parse(jsonString);
  let wordData = "";
  
  for (key in obj.words) {
    wordData += `${obj.words[key].file} ${obj.words[key].title}\n\n`;
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
