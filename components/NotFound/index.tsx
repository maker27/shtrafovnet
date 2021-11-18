import styles from './NotFound.module.scss';

interface INotFoundProps {
    uin: string;
}

export default function NotFound({ uin }: INotFoundProps) {
    return <div className={styles.notfound}>Штраф {uin} не найден</div>;
}
