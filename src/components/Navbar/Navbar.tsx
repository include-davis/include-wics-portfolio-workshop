import { NavLink } from "@/data/interfaces";
import { useRef } from "react";
import styles from "./Navbar.module.scss";

// map navlinks and smooth scrolling
const scrollToRef = (ref: any) => {
  window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
};

export default function Navbar({
  navLinks,
  refs,
}: {
  navLinks: NavLink[];
  refs: any;
}) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        {navLinks.map((link, index) => (
          <li key={index}>
            <button
              className={styles.sectionButton}
              onClick={() => scrollToRef(refs[index])}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
