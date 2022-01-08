
const indexFile = require('./index')

test('check add correct', () => {
const expected = 13
const actual = indexFile.add(4, 9)
expect(actual).toBe(expected)
})