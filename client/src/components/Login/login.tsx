import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./login.css";

import googleLogo from "../../assets/google_logo.svg"
import loginLogo from "../../assets/login_logo.svg"
import {H1, H4, P1, P3} from "../../styles/fonts.style"

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // trigger a loading screen
      return;
    }
    if (user) navigate("/profile");
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login_logo">
        <img src={loginLogo}></img>
      </div>
      <div className="login_title">
        <div className="login_title1">
          <H4>Welcome to</H4>
        </div>
        <div className="login_title2">
          <H1>Reservations</H1>
          <H1>Required.</H1>
        </div>
      </div>
      <div className="login_text">
        <P1>First time and returning users...</P1>
        <P1>sign in below!</P1>
      </div>
      <button className="login_button" onClick={signInWithGoogle}>
        <img className="google_logo" src={googleLogo}></img>
        <P3>Sign in with Google</P3>
      </button>
    </div>
  );
}
export default Login;