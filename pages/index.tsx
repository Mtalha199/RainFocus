import Head from "next/head";
import styles from  "@/styles/pages/index.module.scss"
import Sidebar from "@/components/sidebar";
import Header from "@/components/Header";
import EventSetupGuide from "@/components/EventSetupGuide";

export default function Home() {
  return (
    <>
      <Head>
        <title>RainFocus Summit</title>
      </Head>
      <div className={styles.container}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Header />
        <EventSetupGuide />
      </main>
    </div>
    </>
  );
}
