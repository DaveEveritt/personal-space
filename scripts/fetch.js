
"use strict";

(function(){

  const url = new Request('https://services.swpc.noaa.gov/experimental/products/geospace/geomagnetic-indices.json');
  /*
  5-minute data:
  https://services.swpc.noaa.gov/products/solar-wind/mag-5-minute.json
  [["time_tag","bx_gsm","by_gsm","bz_gsm","lon_gsm","lat_gsm","bt"],["2018-04-15 09:46:00.000","-3.26","-3.86","-1.89","229.83","-20.51","5.40"],["2018-04-15 09:47:00.000","-3.21","-3.79","-2.08","229.74","-22.76","5.39"]]
  http://services.swpc.noaa.gov/products/summary/solar-wind-mag-field.json
  {"Bt":"5","Bz":"-2","TimeStamp":"2018-04-15 09:49:00.000"}
  http://services.swpc.noaa.gov/products/summary/solar-wind-speed.json
  {"WindSpeed":"348","TimeStamp":"2018-04-15 09:44:00.000"}
  https://services.swpc.noaa.gov/products/noaa-estimated-planetary-k-index-1-minute.json
  "time_tag","estimated_kp","kp"],["2018-04-15 08:47:00",1.667,"2M"]
  */ 

  let spaceData = "";

/*
  https://jakearchibald.com/2015/thats-so-fetch/  
  ES6 arrow functions VS JS:
  
  fetch(url).then(r => r.json())
    .then(data => console.log(data))
    .catch(e => console.log("Ooops"))

  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  }).catch(function() {
    console.log("Booo");
  });

  https://techoctave.com/c7/posts/60-simple-long-polling-example-with-javascript-and-jquery
  setTimeout(function(){
    do stuff
  }, 30000); //30 seconds
*/

  fetch(url)
  .then(function (response) {
    console.log(`response: ${response.status}`);
    return response.json();
  })
  .then(function(data) {
    let dl = data.length -1;
    // console.log(dl);
    dataShowKP(data[dl][2], data[dl][3]);
    /*
    no need to loop through
    for(let key in data) {
      spaceData += `DateTime: ${data[key][0]}, ${dataScaleKP(data[key][2], data[key][3])}\n`;
      spaceData += `DateTime: ${data[key][0]}, dst: ${data[key][1]}, kp: ${data[key][2]}, au: ${data[key][3]}, al: ${data[key][4]}, ae: ${data[key][5]}, ao: ${data[key][6]}\n`;
    }
    // showData(spaceData);
    */
  }).catch(function() {
    console.log("Data not available");
  });

  function dataShowKP(kp, au) {
    // console.log(kp);
    document.getElementById("five").innerHTML = `Kp ${getDataScale(kp)}<br>Solar wind: ${au}AU`;
  }
  function getDataScale(kp) {
    // 0-1 quiet, 2-4 unsettled/active, 5 minor storm, 6 larger storm, 7-9 major storm
    let kpf = parseFloat(kp).toFixed(2);
    console.log(kpf);
    switch (true) {
      case kpf < 1:
        return `${kpf}: peaceful`;
        break;
      case kpf <= 1.5:
        return `${kpf}: relaxed`;
        break;
      case kpf < 2:
        return `${kpf}: stirring`;
        break;
      case kpf < 4:
        return `${kpf}: unsettled`;
        break;
      case kpf < 5:
        return `${kpf}: agitated`;
        break;
      case kpf < 6:
        return `${kpf}: blustery`;
        break;
      case kpf < 7:
        return `${kpf}: stormy`;
        break;
      case kpf <= 10:
        return `${kpf}: big storm`;
        break;
      default:
        return "error"
        break;
    }
  }

})();

// https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

// solar wind plasma is slower to change:
// http://services.swpc.noaa.gov/products/solar-wind/plasma-7-day.json

// geomagnetic index has more variation (nested object literal [[]]):
// http://services.swpc.noaa.gov/experimental/products/geospace/geomagnetic-indices.json
