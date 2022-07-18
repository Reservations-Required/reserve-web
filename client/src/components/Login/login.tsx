import "./login.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { H1, H4, P1, P3 } from "../../styles/fonts.style"
import webLogo from "../../assets/roomservationB.svg"
import googleLogo from "../../assets/google_logo.svg"
import loginLogo from "../../assets/login_logo.svg"

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // trigger a loading screen
      return;
    }
    if (user) navigate("/profile", {replace: true});
  }, [user, loading]);

  return (
    <div className="login">
      <div className="login_left">
        <img className="web_logo" src={webLogo}></img>
        {/* <div className="login_title">
        <div className="login_title1">
          <H4>Welcome to</H4>
        </div>
        <div className="login_title2">
          <H1>Reservations<br></br>Required.</H1>
        </div>
  </div>*/}
        <div className="login-container">
          <div className="login_text">
            <P3>First time and returning users...<br></br>sign in below!</P3>
          </div>
          <div className="login-buttons">
            <button className="login_button" onClick={signInWithGoogle}>
              <img className="google_logo" src={googleLogo}></img>
              <div className="login_button_text">
                <P3>Sign in with Google</P3>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="login-right">
        <div className="login_logo">
          <img src={loginLogo} />
        </div>
      </div>
    </div>
  );
}

export default Login;