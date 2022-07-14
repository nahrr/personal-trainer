import { useAuth0 } from "@auth0/auth0-react";
import { BiLogInCircle } from "react-icons/bi";

const LoginBtn = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn  log_in_and_out_btn"
      onClick={() => loginWithRedirect()}
    >
      <span>Log In</span>
      <BiLogInCircle />
    </button>
  );
};
export default LoginBtn;
