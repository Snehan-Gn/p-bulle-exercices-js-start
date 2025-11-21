// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let total = 0
  for (let i = 0; i < birdsPerDay.length; i++)
  {
    total += birdsPerDay[i]
  }
  return total
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const DAYS_PER_WEEK = 7
  let total = 0;
  let weekStart = (week * DAYS_PER_WEEK) - DAYS_PER_WEEK;
  let weekEnd = (week * DAYS_PER_WEEK) - 1;
  let a = birdsPerDay.splice(weekStart, weekEnd);


  for (let i = 0; i < a.length; i++)
  {
    total += a[i];
  }

  return total

}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  throw new Error('Remove this line and implement the function');
}
