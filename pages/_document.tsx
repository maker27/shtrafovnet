import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext
} from 'next/document';

class AppDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="ru">
                <Head>
                    <link rel="icon" href="/favicon.svg" />
                    <meta
                        name="description"
                        content="Получение информации о штрафах по УИН"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default AppDocument;
