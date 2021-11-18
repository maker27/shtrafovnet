import styles from './Loader.module.scss';

interface ILoaderProps {
    size: string;
}

export default function Loader({ size }: ILoaderProps) {
    return (
        <div className={styles.loader__container}>
            <div className={styles.loader} style={{ fontSize: size }}>
                {' '}
            </div>
        </div>
    );
}
