function isLeapYear(year) {
  let result = false;
  switch (true) {
    case year % 400 === 0:
      result = true;
      break;
    case year % 100 === 0:
      result = false;
      break;
    case year % 4 === 0:
      result = true;
  }
  return result;
}

let startYear = 1898;
const incrementYears = 1;
const spanYears = 15;

for (let i = 0; i <= spanYears; i++) {
  startYear += incrementYears;
  console.log(`${startYear} ` + isLeapYear(startYear));
}
