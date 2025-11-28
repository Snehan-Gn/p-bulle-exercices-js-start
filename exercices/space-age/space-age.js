//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const EARTH_YEARS_SECONDS = 31557600;

const ORBITAL_PERIOD = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export const age = (planet, seconds) => {
  period = ORBITAL_PERIOD[planet]

  if(!period == true)
  {
    throw new Error('not a planet')
  }

  
  let earth_age = seconds / EARTH_YEARS_SECONDS;
  let age_converted = earth_age / period;

  return parseFloat(age_converted.toFixed(2));


};
