import { ChangeEvent, useCallback, useState } from 'react';

import useHint from './useHint';

const useUin = () => {
    const [uin, setUin] = useState('');
    const { hint, setHint } = useHint();

    const onChange = useCallback(
        ({ target }: ChangeEvent<HTMLInputElement>) => {
            setUin(target.value);
            setHint(target.value);
        },
        [setHint]
    );

    return {
        uin,
        onChange,
        hint
    };
};

export default useUin;
