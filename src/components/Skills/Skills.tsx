import React from "react";
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import styles from "./Skills.module.scss";

// add icons for languages and tools from react-icons
// 5 icons - Python, Java, React, HTML, CSS

const skills = [
  <FaPython />,
  <FaJava />,
  <FaReact />,
  <FaHtml5 />,
  <FaCss3Alt />,
];

const Skills = React.forwardRef((_: any, ref: any) => {
  return (
    <section className={styles.skillsContainer} ref={ref}>
      <h3 className={styles.skillsTitle}>Skills</h3>
      <div className={styles.Skills}>
        {skills.map((icon, idx) => (
          <div key={idx}>{icon}</div>
        ))}
      </div>
    </section>
  );
});

export default Skills;
