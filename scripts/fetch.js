
"use strict";

(function(){

  let request = new Request('http://services.swpc.noaa.gov/products/noaa-scales.json');

  // let spaceData = [];
  let spaceData = "";

  fetch(request)
    .then(function (response) {
    // console.log(`res: ${response.status}`);
    return response.json();
    })
    .then(function(data) {
    for(let key in data) {
      let x = data[key];
      // spaceData = `${x.R.Scale}, ${x.S.Scale}, ${x.G.Scale}`;
      // spaceData += x.R.Scale + x.S.Scale + x.G.Scale;
      spaceData += x.R.Scale + "," + x.S.Scale + "," + x.G.Scale + "\n";
    }
    console.log(spaceData);
    // return(spaceData);
  });

  // console.log(spaceData);

})();
// https://github.com/CTEC3905/08-lab-json-ajax/blob/flickr/javascript/scripts.js

// try:
// http://services.swpc.noaa.gov/products/solar-wind/plasma-7-day.json
// http://services.swpc.noaa.gov/experimental/products/geospace/geomagnetic-indices.json
