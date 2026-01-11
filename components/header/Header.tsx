import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { PiMoney } from "react-icons/pi";
import { LuMenu } from "react-icons/lu";
import styles from "./Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <PiMoney aria-hidden="true" />
          <span>Exchanger</span>
        </div>
        <div className={styles.menuWrapper}>
          <button
            className={styles.menuButton}
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
          >
            <LuMenu aria-hidden="true" />
          </button>
          {isOpen ? (
            <nav className={styles.dropdown}>
              <Link
                href="/"
                className={router.pathname === "/" ? styles.active : undefined}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/info"
                className={router.pathname === "/info" ? styles.active : undefined}
                onClick={closeMenu}
              >
                Info
              </Link>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
