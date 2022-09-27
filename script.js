let obj = {
  a: 'f',
  b: 78,
  c: 'R',
  d: {
    a: {
      a: null,
      b: 'E',
      c: {
        a: true,
        b: 'C',
        c: 'test'
      },
      d: 'U'
    },
    b: {
     a: 'R',
     b: ['S', 4, 6, 'I'],
     c: 0,
    },
    c: ['O'],
    d: null,
    e: 'N'
  }
}

function findUpperCase(obj) {
  let upperCaseString = "";
  for (let value of Object.values(obj)) {
    if (typeof value == "string" && value.toUpperCase() == value) {
      upperCaseString += value;
    } else if (value instanceof Object) {
      upperCaseString += findUpperCase(value);
    }
  }
  return upperCaseString;
}

console.log(findUpperCase(obj))





