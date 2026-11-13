let stations=[]

async function loadStations() {
    const response= await fetch("./stations.json");
    stations= await response.json()
    console.log(stations)
}

loadStations();

const searchBox = document.getElementById("station-search");
const results = document.getElementById("search-results");

searchBox.addEventListener("input", function() {
    const query = searchBox.value.toLowerCase();

    const matchingStations = stations.filter(function(station) {
        return station.name.toLowerCase().includes(query);
    });

    console.log(matchingStations);
});
