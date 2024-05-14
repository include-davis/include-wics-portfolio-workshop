import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import styles from "./Contact.module.scss";

// have social media icons & links + copyright
const socials = [
  {
    icon: <FaGithub />,
    link: "",
  },
  {
    icon: <FaLinkedin />,
    link: "",
  },
  {
    icon: <FaXTwitter />,
    link: "",
  },
  {
    icon: <MdOutlineEmail />,
    link: "",
  },
];

// map socials to a tag with icon and link
const Contact = React.forwardRef((_: any, ref: any) => {
  return (
    <section className={styles.Contact} ref={ref}>
      <div className={styles.socials}>
        {socials.map((social, idx) => {
          return (
            <a className={styles.icons} key={idx} href={social.link}>
              {social.icon}
            </a>
          );
        })}
      </div>
      <p> Made with 💗 2024 @ WiCS x include workshop</p>
    </section>
  );
});

export default Contact;
