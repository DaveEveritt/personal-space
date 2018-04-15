
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
  // time_tag, dst, kp, au, al, ae, ao

  fetch(url)
  .then(function (response) {
    console.log(`response: ${response.status}`);
    return response.json();
  })
  .then(function(data) {
    let dl = data.length -1;
    // console.log(dl);
    // console.log(data[dl][2], data[dl][3]);
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

  // function showData(spd) {
  //   console.log(spd);
  // }
  function dataShowKP(kp, au) {
    // let dataScale = getDataScale(kp);
    console.log(getDataScale(kp));
    // document.getElementById("five").innerHTML = `Kp: ${kp.toFixed(2)}<br>au: ${au}`;
    document.getElementById("five").innerHTML = `Kp: ${parseFloat(kp)}<br>au: ${au}`;
  }
  function getDataScale(kp) {
    // 0-1 quiet, 2-4 unsettled/active, 5 minor storm, 6 larger storm, 7-9 major storm
    let kpf = parseFloat(kp).toFixed(2);
    // kpf = 9;
    console.log(kpf < 5);
    switch (kpf) {
      case (kpf < 1.00):
        return "quiet";
        break;
      case (kpf < 1.50):
        return "quiet-ish";
        break;
      case (kpf < 2.00):
        return "less quiet";
        break;
      case (kpf < 5.00):
        return "active";
        break;
      case (kpf < 6.00):
        return "minor storm";
        break;
      case (kpf < 7.00):
        return "larger storm";
        break;
      case (kpf < 10.00):
        return "major storm";
        break;
      default:
        return "out of range";
        break;
    }
  }

})();

// solar wind plasma is slower to change:
// http://services.swpc.noaa.gov/products/solar-wind/plasma-7-day.json

// geomagnetic index has more variation (nested object literal [[]]):
// http://services.swpc.noaa.gov/experimental/products/geospace/geomagnetic-indices.json
