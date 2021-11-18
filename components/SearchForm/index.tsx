import styles from './SearchForm.module.scss';

export default function SearchForm() {
    return (
        <div className={styles.form}>
            <label htmlFor="uin-input" className={styles.form__label}>
                Получение информации о штрафе по УИН
            </label>
            <div className={styles.form__control}>
                <input
                    id="uin-input"
                    type="text"
                    className={styles.form__input}
                    placeholder="Введите УИН"
                    value="0355431010119102401042373"
                />
                <button className={styles.form__button}>Найти</button>
                <div className={styles.form__tooltip}>0355431010119102401042373</div>
            </div>
        </div>
    );
}
