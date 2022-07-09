import './admin.css';
import { useState } from 'react';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { H2 } from '../../styles/fonts.style';

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Admin = () => {
  const [user, loading] = useAuthState(auth);
  const [status, setStatus] = useState("");

  async function fetchUserStatus(USER_ID: string | undefined) {
    const res = await fetch(`${SERVER_URL}/users/${USER_ID}`);
    const userStatus: string = (await res.json()).status;
    setStatus(userStatus);
  }

  fetchUserStatus(user?.uid);

  if (status !== "admin") {
    return (
      <div>
        <p>You are not authorized to view this page. Please contact an administrator if this is a mistake.</p>
        <p>You are {status.length === 0 ? "not logged in" : status}.</p>
      </div>
    )
  }
  return (
    <div className="Admin">
      <H2>Reservation Log</H2>
      <H2>Admin Services</H2>
    </div>
  );
}

export default Admin;
