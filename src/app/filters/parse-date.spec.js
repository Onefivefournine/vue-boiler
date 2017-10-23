import parseDate from './parse-date';

describe('parse-date test', () => {

  it('should return error string if date not passed', () => {
    const date = parseDate();
    expect(date).toBe('Не определено');
  });

  it('should return long date if short argument isn`t passed', () => {
    const date = parseDate('1999.12.12');
    expect(date).toBe('12 Dec 1999 00:00:00');
  });

  it('should return short date if same argument is passed', () => {
    const date = parseDate('1999.12.12', true);
    expect(date).toBe('12 Dec 1999');
  });

});
