import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Loader from '../components/Loader';
import NotFound from '../components/NotFound';
import FineInfo from '../components/FineInfo';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Информация о штрафах</title>
                <meta name="description" content="Получение информации о штрафах по УИН" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main className={styles.main}>
                <SearchForm />
            </main>

            <div className={styles.result}>
                <Loader size="1rem" />

                <NotFound uin="0355431010119102401042373" />
            </div>

            <FineInfo />
        </div>
    );
};

export default Home;
