import styles from './FineInfo.module.scss';

const paragraphs = [
    'Свидетельство о регистрации',
    'Дата постановления',
    'Нарушение',
    'Получатель платежа',
    'ИНН',
    'КПП',
    'Расчетный счет',
    'Банк получателя',
    'БИК',
    'ОКТМО(ОКАТО)',
    'КБК',
    'Сумма штрафа',
    'Скидка',
    'К оплате'
];

const values = [
    '3620848239',
    '2019-11-11',
    '12.9ч.2',
    'УФК по Воронежской области (ГУ МВД России по Воронежской области, л/с 04311294650)',
    '3666026374',
    '366601001',
    '40101810500000010004',
    'отделение Воронеж г. Воронеж',
    '042007001',
    '20701000',
    '18811630020016000140',
    '500',
    'активна до 2019-12-02',
    '250'
];

export default function FineInfo() {
    return (
        <div className={styles.fine}>
            <div className={styles.fine__caption}>Постановление #18810136191111001035</div>
            <div className={styles.fine__table + ' ' + styles.table}>
                {paragraphs.map((item, index) => (
                    <div key={item} className={styles.table__row}>
                        <div className={styles.table__column1}>{item}:</div>
                        <div className={styles.table__column2}>{values[index]}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
