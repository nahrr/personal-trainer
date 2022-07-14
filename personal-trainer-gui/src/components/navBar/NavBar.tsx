import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutBtn from "../AuthenticationBtn/LogoutBtn";
import LoginBtn from "../AuthenticationBtn/LoginBtn";
import { useState } from "react";
import { AiFillIdcard, AiOutlineMenu } from "react-icons/ai";
import { AiFillCalendar, AiFillHome, AiFillPlusSquare } from "react-icons/ai";
import { Logo } from "../logo/Logo";

const NavBar = () => {
  const { isAuthenticated } = useAuth0();
  const RegularNavBar = () => (
    <header className={styles.header}>
      <div className={styles.nav_wrapper}>
        <nav className={styles.nav_bar}>
          <div className={styles.col}></div>
          <div className={styles.col}>
            <div className={styles.logo_wrapper}>
              <Logo />
            </div>
          </div>
          <div className={styles.ul_wrapper}>
            <ul>
              <li>
                <Link to="/">
                  <AiFillHome />
                </Link>
              </li>
              <NavBarTabs />
            </ul>
            <NavBarButtons />
          </div>
        </nav>
      </div>
    </header>
  );

  const NavBarTabs = () => {
    return (
      <>
        {isAuthenticated && (
          <>
            <li>
              <Link to={"/Schedule"}>
                <AiFillCalendar />
              </Link>
            </li>
            <li>
              <Link to={"/add-workout"}>
                <AiFillPlusSquare />
              </Link>
            </li>
            <li>
              <Link to={"/profile"}>
                <AiFillIdcard />
              </Link>
            </li>
          </>
        )}
      </>
    );
  };

  const NavBarButtons = () => {
    return (
      <div className={styles.nav_bar_btns}>
        {!isAuthenticated && <LoginBtn />}
        {/* {isAuthenticated && <LogoutBtn />} */}
      </div>
    );
  };

  const MobileNavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen((prev) => !prev);
    };
    return (
      <header className={styles.mobile_nav_bar_wrapper}>
        <div className={styles.mobile_nav_bar}>
          <button className={styles.toggle_button} onClick={() => toggle()}>
            <AiOutlineMenu />
          </button>
          <div
            className={`${isOpen ? styles.show : styles.hide} ${
              styles.mobile_nav_bar_inner
            } `}
          >
            <ul>
              <NavBarTabs />
              <div className={styles.end}>
                <NavBarButtons />
              </div>
            </ul>
          </div>
        </div>
      </header>
    );
  };

  return (
    <>
      <RegularNavBar />
      {/* <MobileNavBar /> */}
    </>
  );
};
export default NavBar;
