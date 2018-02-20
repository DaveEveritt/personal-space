"use strict";

(function(){

  const noaaScales = 'http://services.swpc.noaa.gov/products/noaa-scales.json';
  
  let spaceData = {};

  const getData = function(DataURL) {
    window.fetch(DataURL)
    .then(function(response){
      return response.json();
    }).then(function(json){
      // console.log(json[0]);
      // nothing?:
      spaceData = json;
      console.log(spaceData[0]);
      return spaceData;
    });
  }
  
  getData(noaaScales);

  // undefined, json is not returned:
  // const noaaData = getData(noaaScales);
  console.log(spaceData[0]);

})();
