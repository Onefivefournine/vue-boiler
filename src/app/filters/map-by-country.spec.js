import mapByCountry from './map-by-country';

describe('map-by-country test', () => {
  it('should return error string if date not passed', () => {
    const country = mapByCountry();
    expect(country).toBe('Нет страны');
  });

  it('should return country name if passed argument is correct', () => {
    const country = mapByCountry('RU');
    expect(country).toBe('Россия');
  });

  it('should return argument if passed argument isn`t correct', () => {
    const country = mapByCountry('UU');
    expect(country).toBe('UU');
  });
});
