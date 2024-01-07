/**
 * Calculates the snapshots of a cyber reindeer's road over time.
 * @param {string} road - The initial road configuration.
 * @param {number} time - The number of time steps to simulate.
 * @returns {string[]} - An array of road snapshots at each time step.
 * @throws {TypeError} - If road is not a string or time is not a number.
 */

export const cyberReindeer = (road, time) => {
  if (typeof road !== 'string') throw new TypeError('road should be a string');
  if (typeof time !== 'number') throw new TypeError('time should be a number');

  const snapshots = [road];
  let lastChart = '.';

  for (let i = 1; i < time; i++) {
    if (i === 5) road = road.replaceAll('|', '*');
    const matches = road.match(/S[\*\.]/g);
    if (matches) {
      road = road.replace(matches[0], lastChart + 'S');
      lastChart = matches[0][1];
    }
    snapshots.push(road);
  }

  return snapshots;
};
