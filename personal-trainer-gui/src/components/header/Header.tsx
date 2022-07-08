import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Workouts</Link>
          </li>
          <li>
            <Link to={"/add-workout"}>Add workout</Link>
          </li>
        </ul>
        <div className={styles.profile}>
          <CgProfile />
        </div>
      </nav>
    </header>
  );
};
export default Header;
