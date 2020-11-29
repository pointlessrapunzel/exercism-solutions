//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const gigaSec = 1000000000

export const gigasecond = (date) => {
  return new Date(+date + gigaSec * 1000)
};