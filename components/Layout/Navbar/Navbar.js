import { useState } from 'react'
import styles from "./Navbar.module.css";
import Link from "next/link";
import classnames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faSignOutAlt,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isHamburgerActive, setHamburgerActive] = useState(false);

  const unfoldMenu = () => {
    setHamburgerActive(!isHamburgerActive);
  };

  return (
    <nav id = "navbar" className={classnames(styles.navbar, isHamburgerActive ? styles.responsive : '')}>
      <Link href="/" passHref>
        <div id={styles["logo"]}>
          Shop-All
        </div>
      </Link>
      <Link href="/account-details" passHref>
        <div id={styles["first-link"]} className={styles.link}>
          <FontAwesomeIcon icon={faUser} /> Account
        </div>
      </Link>
      <Link href="/cart" passHref>
        <div className={styles.link}>
          <FontAwesomeIcon icon={faShoppingCart} /> Cart
        </div>
      </Link>
      <Link href="/logout" passHref>
        <div className={styles.link}>
          <FontAwesomeIcon icon={faSignOutAlt} /> Logout
        </div>
      </Link>
      <FontAwesomeIcon
        onClick={unfoldMenu}
        className={styles.icon}
        icon={faBars}
        size = '3x'
      />
    </nav>
  );
};

export default Navbar;