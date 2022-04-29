import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <a href="https://triv.tony" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/vercel.svg"
              alt="Tony Supersmith"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
