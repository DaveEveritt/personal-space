# “Personal Space”

[View here](https://daveeveritt.github.io/personal-space/)

Dave and Fania Everitt, with Alice Tuppen-Corps

An online artwork extracting phrases from individual diary entries, containing words that match the intensity of live space weather data.

## The text

For the initial stages of TETTT, 22 daily “prompts” in the form of keywords and phrases encouraged participants to write regular accounts of their life experience.

The text on the screen is continually refreshed from over 500 of these intimate accounts and recollections.

## The space weather

The central live “space weather” panel shows the intensity of geomagnetic activity affecting Earth’s magnetic field: the Kp index.
This measure of intensity are used to filter the text and modify the display in real time.

<!-- The central panel shows two measures of live “space weather”: -->
<!-- - extent of the solar wind: in AU (1 Astronomical Unit = distance of Earth from Sun) -->

## The nine panels

These are refreshed according to the numerical order of the Chinese mathematical “magic square” of three, known as the Lo-Shu, historically used to lend order to cultural activities.

This provides a connection between the impersonality of space weather and the very personal narratives. The central panel—usually allocated to “Earth”—displays live space weather, the colour of the rotating sun reflecting its current intensity.

---

## TO DO

- [ ] [redirect space-weather-words to personal-space](https://github.blog/2013-05-16-repository-redirects-are-here/) and [redirect pages](https://gist.github.com/domenic/1f286d415559b56d725bee51a62c24a7)
- [ ] Check the JS comment above `getSpaceData()` for simplest approach
- [ ] Investigate [different data](https://services.swpc.noaa.gov/products/solar-wind/plasma-1-day.json) for density, [speed](https://services.swpc.noaa.gov/products/summary/solar-wind-speed.json), temperature
- [ ] add `<meta http-equiv=”Permissions-Policy” content=”interest-cohort=()”>` (FLoC) to show no [interest-based tracking](https://www.positioniseverything.net/error-with-permissions-policy-header-unrecognized-feature-interest-cohort./)

---

## References

- [radial solar-wind flow speed is in the range of 300 km/s to 800 km/s (above 500 is *fast*)](https://link.springer.com/article/10.1007/s41116-019-0021-0)
