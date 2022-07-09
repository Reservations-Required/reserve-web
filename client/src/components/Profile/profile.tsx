import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { auth, db, logout } from "../../firebase";
import Account from "../Confirmation/Account/account";
import { StyledButton } from "../../styles/button.style";
import { fetchUserName } from "../../firebase/functions";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName(user, setName);
  }, [user, loading]);

  return (
    <div className="dashboard">
      <div className="account">
        <Account name={name} email={user?.email} />
      </div>
      <div className="button">
        <StyledButton onClick={logout}>Logout</StyledButton>
      </div>
      

    </div>
  );
}
export default Profile;