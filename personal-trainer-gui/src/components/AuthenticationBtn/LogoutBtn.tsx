import styles from "./logoutBtn.module.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { BiLogOutCircle } from "react-icons/bi";
const LogoutBtn = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="btn  log_in_and_out_btn"
      onClick={() => logout({ returnTo: "http://localhost:3000" })}
    >
      <span>Log Out</span>
      <BiLogOutCircle />
    </button>
  );
};

export default LogoutBtn;
