const generateNumbersRange = (from, to) => {
  const result = [];
  for (let i = from; i <= to; i++) {
    result.push(i);
  }
  return result;
};

const getLineSeats = () =>
  generateNumbersRange(1, 10)
    .map(
      seatNumber => `
    <div class="sector__seat" data-seat-number="${seatNumber}">
    </div>`,
    )
    .join('');

const getSectorLines = () =>
  generateNumbersRange(1, 10)
    .map(
      lineNumber => `
    <div class="sector__line" data-line-number="${lineNumber}">
    ${getLineSeats()}</div>`,
    )
    .join('');

const renderArena = () => {
  const arenaElem = document.querySelector('.arena');

  const sectorString = generateNumbersRange(1, 3)
    .map(
      sectorNumber => `
    <div class="sector" data-sector-number="${sectorNumber}">
    ${getSectorLines()}</div>`,
    )
    .join('');

  arenaElem.innerHTML = sectorString;
};
renderArena();
