import styles from './SearchForm.module.scss';
import { fineIds } from '../../assets/fines';
import { ChangeEvent, useCallback, useState } from 'react';
import { Uin } from '../../assets/types';
import TextInput from '../TextInput';

interface SearchFormProps {
    onSearch: (fineId: Uin) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
    const [uin, setUin] = useState(fineIds[0]);

    const onChange = useCallback(
        ({ target }: ChangeEvent<HTMLInputElement>) => {
            setUin(target.value);
        },
        []
    );

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
                <div className={styles.form__tooltip}>
                    0355431010119102401042373
                </div>
            </div>
        </div>
    );
}
