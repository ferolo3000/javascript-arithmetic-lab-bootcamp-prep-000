function add (a, b) {
  return a + b
}

function substract (a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide (a, b){
  return a / b
}

function inc (n) {
  return n ++
}

function dec(n) {
  return 
}

it('dec(n) decrements n and returns the result', function() {
  expect(dec(a)).toEqual(a - 1)
})

describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})