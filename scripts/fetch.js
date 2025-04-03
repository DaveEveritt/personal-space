
"use strict";

// (function(){

  let kpf;

  // const url_OLD = new Request('https://services.swpc.noaa.gov/products/geospace/planetary-k-index-dst.json');

  const url = new Request('https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json');
  // ["2025-03-27 00:00:00.000","4.00","27","8"]
  let spaceData = "";


/*
  ES6 arrow functions VS JS: https://jakearchibald.com/2015/thats-so-fetch/  
  fetch(url).then(r => r.json())
    .then(data => console.log(data))
    .catch(e => console.log("Ooops"))
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
      dataShowKP(data[dl][1]);
      // dataShowKP(data[dl][1], data[dl][2]);
    }).catch(function() {
      dataNoShow("Data not available");
    });
  }

  setInterval(function(){
    getSpaceData();
  }, 300000);
  // 5 minutes: 5 * 60 * 1000
  
  // Kp index: 0-9 (geomagnetic earth impact of solar activity) Ap (daily average) value not used
  function dataShowKP(kp) {
    sunPanel.innerHTML = `<p>Kp ${kp}</p><p class="impact">Earth impact: <span class="scale">0-10</span></p><p class="severity">${getDataScale(kp)}</p>`;
    // `<p>Average today: Ap ${ap}</p>`;
  }
  function dataNoShow(nodata) {
    sunPanel.innerHTML = nodata;
  }

  const sunPanel = document.getElementById("five");
  function changeSun(file) {
    sunPanel.style.backgroundImage = `url(images/sun/sun-${file}.gif)`;
  }

  function getDataScale(kp) {
    // 0-1 quiet, 2-4 normal, 5 minor storm, 6 moderate storm, 7 strong storm, 8 severe storm, 9 extreme storm

    kpf = parseFloat(kp).toFixed(2);

    getData();

    switch (true) {
      case kpf < 1:
        changeSun("1");
        return `quiet`;
        break;
      case kpf <= 1.5:
        changeSun("2");
        return `settled`;
        break;
      case kpf < 4:
        changeSun("4");
        return `peaceful`;
        break;
      case kpf < 5:
        changeSun("4");
        return `normal`;
        break;
      case kpf < 6:
        changeSun("6");
        return `unsettled`;
        break;
      case kpf < 7:
        changeSun("7");
        return `agitated`;
        break;
      case kpf < 8:
        changeSun("8");
        return `turbulent`;
        break;
      case kpf < 9:
        changeSun("8");
        return `stormy`;
        break;
      case kpf <= 10:
        changeSun("8");
        return `extreme`;
        break;
      default:
        return 'no data';
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

Kp https://www.spaceweatherlive.com/en/help/the-kp-index.html
Ap https://www.spaceweatherlive.com/en/help/the-ap-index.html

https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
*/
