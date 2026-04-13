import { dataSeries } from './data.js';
const seriesTbody = document.getElementById('series-tbody');
const averageElement = document.getElementById('seasons-average');
function renderSeriesInTable(series) {
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    if (series.length === 0)
        return 0;
    let totalSeasons = 0;
    series.forEach((serie) => {
        totalSeasons = totalSeasons + serie.seasons;
    });
    const average = totalSeasons / series.length;
    return average;
}
function displayAverage(average) {
    averageElement.textContent = `Seasons average: ${average}`;
}
document.addEventListener('DOMContentLoaded', () => {
    renderSeriesInTable(dataSeries);
    const average = getAverageSeasons(dataSeries);
    displayAverage(average);
});
