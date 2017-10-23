import centToRub from './cent-to-rub';

describe('cent-to-rub filter test', () => {

    it('should return argument with rouble sign if argument is not a number', () => {
        const filtered = centToRub('test');
        expect(filtered).toBe('test ₽');
    });

    it('should return right value', () => {
        const filtered = centToRub(100);
        expect(filtered).toBe('1.0 ₽')
    });
});