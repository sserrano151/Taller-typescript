import { Serie } from './serie.js';
import { dataSeries } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series-tbody')!;
const averageElement: HTMLElement = document.getElementById('seasons-average')!;

function renderSeriesInTable(series: Serie[]): void {
  series.forEach((serie: Serie) => {
    let trElement: HTMLTableRowElement = document.createElement("tr");
    trElement.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    seriesTbody.appendChild(trElement);
  });
}

function getAverageSeasons(series: Serie[]): number {
  if (series.length === 0) return 0;

  let totalSeasons: number = 0;
  series.forEach((serie: Serie) => {
    totalSeasons = totalSeasons + serie.seasons;
  });

  const average: number = totalSeasons / series.length;
  return average;
}

function displayAverage(average: number): void {
  averageElement.textContent = `Seasons average: ${average}`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderSeriesInTable(dataSeries);
  const average: number = getAverageSeasons(dataSeries);
  displayAverage(average);
});