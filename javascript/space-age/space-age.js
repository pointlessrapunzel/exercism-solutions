export const age = (planet, ageSeconds) => {
  if (!ORBITAL_PERIODS[planet]) {
    throw new Error(`${planet} is not a planet!`)
  }
  const result = ageSeconds / (EARTH_YEAR_IN_SECONDS * ORBITAL_PERIODS[planet])

  return +result.toFixed(2)
};

const ORBITAL_PERIODS = {
  'mercury': 0.2408467,
  'venus': 0.61519726,
  'earth': 1,
  'mars': 1.8808158,
  'jupiter': 11.862615,
  'saturn': 29.447498,
  'uranus': 84.016846,
  'neptune':  164.79132
}

const EARTH_YEAR_IN_SECONDS = 31557600