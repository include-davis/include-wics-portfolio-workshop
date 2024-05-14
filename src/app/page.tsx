"use client";

import Navbar from "@/components/Navbar/Navbar";
import NavLinks from "@/data/navLinks.json";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import { useRef } from "react";
import styles from "./page.module.scss";

export default function Home() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const allRefs = [aboutRef, skillsRef, projectsRef, contactRef];

  return (
    <>
      <Navbar navLinks={NavLinks} refs={allRefs} />
      <div className={styles.content}>
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
      </div>
      <Contact ref={contactRef} />
    </>
  );
}
