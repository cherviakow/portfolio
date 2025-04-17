import css from "./Contacts.module.css";

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Contacts() {
  return (
    <>
      <div className={css.contactsDiv}>
        <h1 className={css.contactsHead}>Contacts</h1>

        <ul className={css.contactsList}>
          <li className={css.email}>ihor.cherviakov@gmail.com</li>
          <li className={css.LinkedIn}>
            <a
              href="https://www.linkedin.com/in/ihor-cherviakov-818805274/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={css.LinkedInIcon} />
            </a>
            <p>LinkedIn</p>
          </li>

          <li className={css.inst}>
            <a
              href="https://www.instagram.com/igorcherviakov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={css.instIcon} />
            </a>
            <p>Instagram</p>
          </li>
        </ul>
      </div>
    </>
  );
}
