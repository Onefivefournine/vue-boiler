import cutKilo from './cut-kilo';

describe('cut-kilo filter test', () => {

  it('should return argument toString if argument is not a string', () => {
    const arg = [];
    const filtered = cutKilo(arg);
    expect(filtered).toBe(arg.toString());
  });

  it('should return right value', () => {
    const filtered = cutKilo('test123');
    expect(filtered).toBe('test 123')
  });
});
