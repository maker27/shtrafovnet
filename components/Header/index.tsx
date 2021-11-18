import Image from 'next/image';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__logo + ' ' + styles.logo}>
                <Image src="/images/logo.svg" alt="Logo" width={18} height={14} />
            </div>
            <div className={styles.header__label}>
                <span className={styles.header__label_bold}>штрафов</span> нет
            </div>
        </header>
    );
}
