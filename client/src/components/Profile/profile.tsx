import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { auth, db, logout } from "../../firebase";
import { StyledButton } from "../../styles/button.style";
import { fetchUserName } from "../../firebase/functions";
import { H2, P1, P5 } from "../../styles/fonts.style";

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
      <H2>Hi, {name.split(" ")[0]}!</H2>
      <P5>Here are all your reservations and favorited rooms.</P5>
      <P1>Favorited Rooms</P1>
      <div className="button">
        <StyledButton onClick={logout}>Logout</StyledButton>
      </div>
      

    </div>
  );
}
export default Profile;