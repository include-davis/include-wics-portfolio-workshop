import React from "react";
import Image from "next/image";
import styles from "./About.module.scss";

// add title, description, personal image, and resume button

const About = React.forwardRef((_: any, ref: any) => {
  return (
    <section className={styles.About} ref={ref}>
      <h1>Hello, my name is Emily</h1>
      <p>Welcome to my portfolio!</p>
    </section>
  );
});

export default About;
