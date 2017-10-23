import cutSum from './cut-sum';

describe('cut-sum filter test', () => {

  it('should return argument toString if argument < 1000', () => {
    const arg = 999;
    const filtered = cutSum(arg);
    expect(filtered).toBe(arg.toString());
  });

  it('should return right value if 1000 < argument < 1000000', () => {
    const arg = 120000;
    const filtered = cutSum(arg);
    expect(filtered).toBe((arg / 1000).toFixed(0) + 'k');
  });

  it('should return right value if argument > 1000000', () => {
    const arg = 12000000;
    const filtered = cutSum(arg);
    expect(filtered).toBe((arg / 1000000).toFixed(0) + 'M');
  });

});
