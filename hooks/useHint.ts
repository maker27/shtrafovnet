import { useCallback, useState } from 'react';

import { Uin } from '../assets/types';
import calculateCheckingDigit from '../helpers/calculateCheckingDigit';

const useHint = () => {
    const [hint, setHint] = useState('');

    const getHint = useCallback((uin: Uin) => {
        if (uin && !/^\d+$/.test(uin)) {
            return 'УИН должен состоять только из цифр';
        }
        const uinAcceptableLengths = [20, 25];
        const currentLength = uin.length;
        const maxLength = uinAcceptableLengths[uinAcceptableLengths.length - 1];
        if (currentLength > maxLength) {
            return `Слишком длинный номер УИН (макс. ${maxLength} цифр)`;
        }
        const needLength =
            uinAcceptableLengths.filter(l => l >= currentLength).shift() || 0;
        if (currentLength === needLength) {
            return '';
        }
        return currentLength === needLength - 1
            ? uin + calculateCheckingDigit(uin)
            : uin.padEnd(needLength, 'х');
    }, []);

    const changeHint = useCallback(
        (uin: Uin) => {
            setHint(getHint(uin));
        },
        [getHint]
    );

    return {
        hint,
        setHint: changeHint
    };
};

export default useHint;
