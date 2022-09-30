const arraySlice = require('../ex2-slice-from-scratch.js')

test('Implement the slice method from scratch',()=>{
    expect(arraySlice([1,2,3,4],1,2))
    .toBe([2])
})