"use strict";

(function(){

  const noaaScales = 'http://services.swpc.noaa.gov/products/noaa-scales.json';

  const getData = function(getData) {
    window.fetch(getData)
    .then(function(response){
      return response.json();
    }).then(function(json){
      console.log(json[0]);
      // nothing?:
      return json;
    });
    // fails:
    // return json;
  }
  
  getData(noaaScales);

  // undefined, json is not returned:
  const noaaData = getData(noaaScales);
  console.log(noaaData);

})();
