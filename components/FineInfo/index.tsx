import styles from './FineInfo.module.scss';
import { Fine } from '../../assets/types';

type FineOption = keyof Fine;

const paragraphs: { [key in FineOption]?: string } = {
    doc_number: 'Свидетельство о регистрации',
    bill_at: 'Дата постановления',
    koap_code: 'Нарушение',
    payee_username: 'Получатель платежа',
    payee_inn: 'ИНН',
    payee_kpp: 'КПП',
    payee_bank_account: 'Расчетный счет',
    payee_bank_name: 'Банк получателя',
    payee_bank_bik: 'БИК',
    payee_oktmo: 'ОКТМО(ОКАТО)',
    kbk: 'КБК',
    amount: 'Сумма штрафа',
    discount_at: 'Скидка',
    amount_to_pay: 'К оплате'
};

interface FineInfoProps {
    fine?: Fine;
}

export default function FineInfo({ fine }: FineInfoProps) {
    if (!fine) return null;

    const formatParagraphs = (item: FineOption) => {
        const value = fine[item] || '';
        if (item === 'discount_at') {
            return value ? `активна до ${value}` : '-';
        }
        return value;
    };

    return (
        <div className={styles.fine}>
            <div className={styles.fine__caption}>
                Постановление #{fine.number}
            </div>
            <div className={styles.fine__table + ' ' + styles.table}>
                {Object.entries(paragraphs).map(([item, value]) => (
                    <div key={item} className={styles.table__row}>
                        <div className={styles.table__column1}>{value}:</div>
                        <div className={styles.table__column2}>
                            {formatParagraphs(item as FineOption)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
