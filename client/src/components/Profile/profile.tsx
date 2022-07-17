import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { auth } from "../../firebase";
import { fetchUserName } from "../../firebase/functions";
import { H2, P1, P5 } from "../../styles/fonts.style";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const [userData, setUserData] = useState<any>({})

  async function getUserData() {
    const res = await fetch(`${SERVER_URL}/users/${user?.uid}`);
    const data = await res.json();
    setUserData(data);
  }

  useEffect(() => {
    if (loading) return;
    if (!user) return;
    fetchUserName(user, setName);
    // getUserData()
  }, [user, loading, userData]);


  return (
    <div className="dashboard">
      <H2>Hi, {name.split(" ")[0]}!</H2>
      <P5>Here are all your reservations and favorited rooms.</P5>
      <P1>Favorited Rooms</P1>
      <P1>Reservations</P1>
      {JSON.stringify(userData["my_reservations"])}
    </div>
  );
}
export default Profile;