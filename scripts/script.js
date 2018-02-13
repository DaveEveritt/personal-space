"use strict";

(function(){
  // let data = "hello";
  // console.log(data);

  // test:
  window.fetch('http://services.swpc.noaa.gov/products/noaa-scales.json')
    .then(function(response){
        return response.json();
    }).then(function(json){
        return console.log(json);
    });
})();


