
"use strict";

// (function(){

  var kpf;

  const url = new Request('https://services.swpc.noaa.gov/experimental/products/geospace/geomagnetic-indices.json');

  let spaceData = "";

/*
  ES6 arrow functions VS JS: https://jakearchibald.com/2015/thats-so-fetch/  
  
  ES6:
  fetch(url).then(r => r.json())
    .then(data => console.log(data))
    .catch(e => console.log("Ooops"))

  OLD:
  fetch(url).then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data);
  }).catch(function() {
    console.log("Booo");
  });
*/
  window.addEventListener("load", getSpaceData);

  function getSpaceData() {
    fetch(url)
    .then(function (response) {
      // console.log(`response: ${response.status}`);
      return response.json();
    })
    .then(function(data) {
      let dl = data.length -1;
      // console.log(dl);
      dataShowKP(data[dl][2], data[dl][3]);
    }).catch(function() {
      // console.log("Data not available");
      dataNoShow("Data not available");
    });
  }

  setInterval(function(){
    getSpaceData();
  }, 30000);
  // 5 minutes: 5 * 60 * 1000

  function dataShowKP(kp, au) {
    sunPanel.innerHTML = `Kp ${kp} <span>${getDataScale(kp)}</span><br><br>Solar wind: ${au}AU`;
  }
  function dataNoShow(nodata) {
    sunPanel.innerHTML = nodata;
  }

  const sunPanel = document.getElementById("five");
  function changeSun(file) {
    // console.log(file);
    sunPanel.style.backgroundImage = `url(images/sun/sun-${file}.gif)`;
  }

  function getDataScale(kp) {
    // 0-1 quiet, 2-4 unsettled/active, 5 minor storm, 6 larger storm, 7-9 major storm

    kpf = parseFloat(kp).toFixed(2);
    // console.log("fetch", kpf);

    getData();

    switch (true) {
      case kpf < 1:
        changeSun("1");
        return `peaceful`;
        break;
      case kpf <= 1.5:
        changeSun("2");
        return `relaxed`;
        break;
      case kpf < 2:
        changeSun("3");
        return `stirring`;
        break;
      case kpf < 4:
        changeSun("4");
        return `unsettled`;
        break;
      case kpf < 5:
        changeSun("5");
        return `agitated`;
        break;
      case kpf < 6:
        changeSun("6");
        return `disturbed`;
        break;
      case kpf < 7:
        changeSun("7");
        return `stormy`;
        break;
      case kpf <= 10:
        changeSun("8");
        return `extreme`;
        break;
      default:
        return `no data`;
        break;
    }
  }

// })();

/*
Solar wind directory listing:
https://services.swpc.noaa.gov/products/solar-wind/

solar wind plasma is slower to change:
http://services.swpc.noaa.gov/products/solar-wind/plasma-7-day.json

Using geomagnetic index has more variation (nested object literal [[]]):
https://services.swpc.noaa.gov/experimental/products/geospace/geomagnetic-indices.json
"time_tag", "dst", "kp", "au", "al", "ae", "ao"

5-minute data:
https://services.swpc.noaa.gov/products/solar-wind/mag-5-minute.json
[["time_tag","bx_gsm","by_gsm","bz_gsm","lon_gsm","lat_gsm","bt"],["2018-04-15 09:46:00.000","-3.26","-3.86","-1.89","229.83","-20.51","5.40"],["2018-04-15 09:47:00.000","-3.21","-3.79","-2.08","229.74","-22.76","5.39"]]
http://services.swpc.noaa.gov/products/summary/solar-wind-mag-field.json
{"Bt":"5","Bz":"-2","TimeStamp":"2018-04-15 09:49:00.000"}
http://services.swpc.noaa.gov/products/summary/solar-wind-speed.json
{"WindSpeed":"348","TimeStamp":"2018-04-15 09:44:00.000"}
https://services.swpc.noaa.gov/products/noaa-estimated-planetary-k-index-1-minute.json
"time_tag","estimated_kp","kp"],["2018-04-15 08:47:00",1.667,"2M"]

https://services.swpc.noaa.gov/products/geospace/planetary-k-index-dst.json

https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
*/
