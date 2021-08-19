import Head from 'next/head'
import Form from '../../components/newDeck/form'
import styles from '/styles/Home.module.css'


const NewDeck = ()=>  (
    <div className={styles.container}>
      <Head>
        <title>New Flesh cards deck</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>
          Create new Flesh Cards Deck
        </h2>
        <div className={styles.grid}>
          <Form/>
        </div>
      </main>

      <footer className={styles.footer}>
        hehe
      </footer>
    </div>
  );
export default NewDeck; 