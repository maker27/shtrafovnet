import calculateCheckingDigit from '../helpers/calculateCheckingDigit';
import { fineIds } from '../assets/fines';

describe('checks last digit', () => {
    const [uin1, uin2] = fineIds;

    it('base case', () => {
        expect(calculateCheckingDigit(uin2.slice(0, -1))).toBe(uin2.slice(-1));
    });

    it('when checking digit equals 10', () => {
        expect(calculateCheckingDigit(uin1.slice(0, -1))).toBe(uin1.slice(-1));
    });
});
