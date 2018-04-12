
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
      let x = data;
      // spaceData = `${x.R.Scale}, ${x.S.Scale}, ${x.G.Scale}`;
      // spaceData += x.R.Scale + "," + x.S.Scale + "," + x.G.Scale + "\n";
      // spaceData += x[key]["dst"] + "\n";
      spaceData += x[key["dst"]] + "\n";
    }
    console.log(spaceData);
    // return(spaceData);
  });

  // console.log(spaceData);

})();
// general data page
// https://github.com/CTEC3905/08-lab-json-ajax/blob/flickr/javascript/scripts.js

// previous data (too minimal) but as object {}:
// http://services.swpc.noaa.gov/products/noaa-scales.json

// solar wind plasma is slower to change:
// http://services.swpc.noaa.gov/products/solar-wind/plasma-7-day.json

// geomagnetic index has more variation (nested object literal [[]]):
// http://services.swpc.noaa.gov/experimental/products/geospace/geomagnetic-indices.json
