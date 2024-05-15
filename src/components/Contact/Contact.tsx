import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import styles from "./Contact.module.scss";

// have social media icons & links + copyright
const socials = [
  {
    icon: <FaGithub />,
    link: "https://google.com",
  },
  {
    icon: <FaLinkedin />,
    link: "https://google.com",
  },
  {
    icon: <FaXTwitter />,
    link: "https://google.com",
  },
  {
    icon: <MdOutlineEmail />,
    link: "mailto:email",
  },
];

// map socials to a tag with icon and link
const Contact = React.forwardRef((_: any, ref: any) => {
  return (
    <section className={styles.Contact} ref={ref}>
      <div className={styles.socials}>
        <a className={styles.icons} href={"https://google.com"}>
          <FaGithub />
        </a>
        <a className={styles.icons} href={"https://google.com"}>
          <FaLinkedin />
        </a>
        <a className={styles.icons} href={"https://google.com"}>
          <FaXTwitter />
        </a>
        <a className={styles.icons} href={"https://google.com"}>
          <MdOutlineEmail />
        </a>
      </div>
      <p> Made with 💗 2024 @ WiCS x include Workshop</p>
    </section>
  );
});

export default Contact;
