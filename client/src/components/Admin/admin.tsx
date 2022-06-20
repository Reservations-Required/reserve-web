import './admin.css';
import { useState } from 'react';
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const SERVER_URL = "http://localhost:8080/api"

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
      <p>This is the admin page</p>
      <h1>User Management System</h1>
      <h2>Query user information</h2>
      <h2>Change user status</h2>
      <h1>Create or Edit the Database</h1>
      <h2>Create a building/room</h2>
      <h2>Update building/room</h2>
      <h2>Remove a reservation</h2>
      <h1>Reservation Log System</h1>
      <h2>Return information about reservations in a table</h2>
    </div>
  );
}

export default Admin;
