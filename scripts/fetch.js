
"use strict";

(function(){

  const url = new Request('https://services.swpc.noaa.gov/experimental/products/geospace/geomagnetic-indices.json');
  let spaceData = "";
  // time_tag, dst, kp, au, al, ae, ao

  fetch(url)
  .then(function (response) {
    console.log(`response: ${response.status}`);
    return response.json();
  })
  .then(function(data) {
    for(let key in data) {
      spaceData += `DateTime: ${data[key][0]}, dst: ${data[key][1]}, kp: ${data[key][2]}, au: ${data[key][3]}, al: ${data[key][4]}, ae: ${data[key][5]}, ao: ${data[key][6]}\n`;
      // TODO: rmove first (header) row
    }
    showData(spaceData);
  }).catch(function() {
    console.log("Data could not be fetched");
  });

  function showData(spd) {
    console.log(spd);
  }

})();

// previous data (too minimal) but as object {}:
// http://services.swpc.noaa.gov/products/noaa-scales.json
      // spaceData = `${x.R.Scale}, ${x.S.Scale}, ${x.G.Scale}`;
      // spaceData += x.R.Scale + "," + x.S.Scale + "," + x.G.Scale + "\n";

// solar wind plasma is slower to change:
// http://services.swpc.noaa.gov/products/solar-wind/plasma-7-day.json

// geomagnetic index has more variation (nested object literal [[]]):
// http://services.swpc.noaa.gov/experimental/products/geospace/geomagnetic-indices.json
