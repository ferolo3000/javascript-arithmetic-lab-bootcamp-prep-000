function add (a, b) {
  return a + b
}

function substract (a, b) {
  return b - a
}

function multiply(a, b) {
  return a * b
}

function divide (a, b){
  return a / b
}

function inc (n) {
  return n + 1
}

function dec(n) {
  return n - 1
}

function makeInt(n) {
  return parseInt(n)
}

/* describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
}) */