describe('fizzbuzz', () => {

  it('returns num not divisible by 3 or 5', () => {
    // expect(1).toEqual(1)
    expect(global.__DEV__.fizzbuzz(4)).toEqual(4)
    expect(global.__DEV__.fizzbuzz(11)).toEqual(11)
  })

})
