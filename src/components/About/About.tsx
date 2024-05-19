import React from "react";
import Image from "next/image";
import styles from "./About.module.scss";

// add title, description, personal image, and resume button

const About = React.forwardRef((_: any, ref: any) => {
  return (
    <section className={styles.About} ref={ref}>
      <div className={styles.Info}>
        <h1 className={styles.Title}>Hello! My name is Ryan.</h1>
        <p className={styles.Description}>Simple and clean portfolio website</p>
        <a
          className={styles.resume}
          href="/resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <Image
        className={styles.myPic}
        src="/projects/project1.png"
        width={500}
        height={500}
        alt="Me!"
      />
    </section>
  );
});

export default About;
