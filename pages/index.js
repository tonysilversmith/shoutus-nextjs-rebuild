import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ShoutUs - Your Mentor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://shoutus.in">ShoutUs.in!</a>
        </h1>
        <Carousel />
        <Box sx={{ p: "2em" }}>
          <p className={styles.description}>
            Get best customers services, at lowest prices. <br />
            <code className={styles.code}>Try Now!!</code>
          </p>

          <div className={styles.grid}>
            <a href="/services" className={styles.card}>
              <h2>Low Price Labours &rarr;</h2>
              <p>Get information about low cost labours, benefits and bonus.</p>
            </a>

            <a href="/contact" className={styles.card}>
              <h2>Learn More about us &rarr;</h2>
              <p>Learn about us in an interactive way with real time chat!</p>
            </a>

            <a href="/login" className={styles.card}>
              <h2>Log into your accout &rarr;</h2>
              <p>
                Discover and demand your services, we will provide best of best
                experience.
              </p>
            </a>

            <a href="/posts" className={styles.card}>
              <h2>Create your own and join us. &rarr;</h2>
              <p>
                Create your own demands and services or ads to get your public.
              </p>
            </a>
          </div>
        </Box>
      </main>
      <Footer />
    </div>
  );
}
