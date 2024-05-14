import React from "react";
import Image from "next/image";
import styles from "./About.module.scss";

// add title, description, personal image, and resume button

const About = React.forwardRef((_: any, ref: any) => {
  return (
    <section className={styles.About} ref={ref}>
      <div className={styles.words}>
      <h1>NAME</h1>
      <p>Simple and clean portfolio website</p>
        <a
          className={styles.resume}
          href="https://user.github.io/resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <Image
        className={styles.myPic}
        src="/include-wics-portfolio-workshop/next.svg"
        width={200}
        height={200}
        alt="My Picture"
      />
    </section>
  );
});

export default About;
