import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Account from "../Confirmation/Account/account";
import { StyledButton } from "../../styles/button.style";

const Profile = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    /*
    Error: the first time a user logs in using google, it can't get the user's name.
    Only in subsequent logins can it retreive and display the name.
    */
    try {

      const q = query(collection(db, "users"), where("u_id", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
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