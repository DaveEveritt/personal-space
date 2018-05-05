# Space Weather Words

An online artwork based on connecting personal diary-like text to astronomical data.

[View Space Weather Words here](https://daveeveritt.github.io/space-weather-words/).

## References

- [loshu colours](http://www.taliscope.com/LoShu_en.html)

## Temporary links:

### JavaScript fetch

- https://jakearchibald.com/2015/thats-so-fetch/
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Basic_concepts
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- https://stackoverflow.com/a/44436916/123033
- https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

### JSON

- [JSON formatter online](https://jsonformatter.org/)

### Space Weather

- [Best source of live JSON data for Solar & Geomagnetic activity (Space Weather Live forum)](https://www.spaceweatherlive.com/community/topic/1361-best-source-of-live-json-data-for-solar-geomagnetic-activity/)

## TO DO

- [X] fix http/https clash
- [x] put random subsrings into panels
- [x] refresh both text and data regularly
- [x] prune stray characters at start of text strings
- [ ] use .indexOf(' ') to trim before first word
- [ ] fade changes to text
- [ ] use HSL to change the saturation of background colours
- [x] fade text in the Lo-Shu numerical sequence
- [x] prune short text entries
- [x] central sun image to reflect intensity
- [ ] faster text refresh with higher Kp index
- [x] select text according to solar intensity (Fania Raczinski)
- [ ] enable a word search for mobile users




# Fania's edits

To make changes to categories follow these steps:

1. add/change/remove mood keywords (parse-text.js, lines 61-63)
2. run processData function (comment in line 22, parse-text.js)
3. print results to console (comment in line 126,127 parse-text.js)
4. copy all (!) results from console into new.js (let jsonString = ``)
5. comment in lines 44-46 to get updated totals from console and put them onto lines 169,173,177
5. uncomment previous lines again, and then refresh page.

