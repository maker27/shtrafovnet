import React from 'react';

import Head from 'next/head';
import Header from '../Header';
import styles from './PageLayout.module.scss';

interface PageLayoutProps {
    title: string;
    children: React.ReactNode;
}

export default function PageLayout({ title, children }: PageLayoutProps) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
            </Head>

            <Header />

            <main className={styles.main}>{children}</main>
        </div>
    );
}
