function isLeapYear(year: number): boolean {
  if (evenlyDivisible(year, 4) && (!evenlyDivisible(year, 100) || evenlyDivisible(year, 400))) {
    return true
  }
  return false
}

function evenlyDivisible(divident: number, divisor: number): boolean {
  return divident % divisor === 0
}

export default isLeapYear
