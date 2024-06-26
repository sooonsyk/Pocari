import Head from 'next/head';
import styles from '../styles/globals.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to Smart Portfolio
                </h1>
            </main>
        </div>
    );
};

export default Home;
