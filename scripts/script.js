"use strict";

(function(){

  const noaaScales = 'http://services.swpc.noaa.gov/products/noaa-scales.json';

  const getData = function(getData) {
    window.fetch(getData)
    .then(function(response){
      return response.json();
    }).then(function(theData){
      return console.log(theData[0]);
    });
    // return theData;
  }
  
  // these also shows the data:
  getData(noaaScales);
  const noaaData = getData(noaaScales);
  // console.log(noaaData[0].DateStamp);

})();
