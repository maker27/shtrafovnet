import { useCallback } from 'react';

import styles from './SearchForm.module.scss';
import { Uin } from '../../assets/types';
import TextInput from '../TextInput';
import useUin from '../../hooks/useUin';

interface SearchFormProps {
    onSearch: (fineId: Uin) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
    const { uin, onChange, hint } = useUin();

    const onSubmit = useCallback(() => {
        onSearch(uin);
    }, [uin, onSearch]);

    return (
        <div className={styles.form}>
            <label htmlFor="uin-input" className={styles.form__label}>
                Получение информации о штрафе по УИН
            </label>
            <div className={styles.form__control}>
                <TextInput
                    value={uin}
                    className={styles.form__input}
                    id="uin-input"
                    placeholder="Введите УИН"
                    autoComplete={false}
                    onEnter={onSubmit}
                    onChange={onChange}
                />
                <button className={styles.form__button} onClick={onSubmit}>
                    Найти
                </button>
                <div
                    className={styles.form__tooltip}
                    style={{ display: hint.length ? 'block' : 'none' }}>
                    {hint}
                </div>
            </div>
        </div>
    );
}
