import { useState, useEffect } from 'react';
import { H1, H2, P4 } from '../../styles/fonts.style';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import Account from './Account/account';
import ReservationSummary from './ReservationSummary/reservationSummary';
import { fetchUserName } from '../../firebase/functions';
import './confirmation.css';
import { Grid } from '@mui/material';

interface SummaryProps {
    room: string;
    date: string;
    time: string;
    purpose: string;
}

const Confirmation = (props: SummaryProps) => {
    const [success, setSuccess] = useState(false);
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        if (user != null) fetchUserName(user, setName);
    }, [user]);

    if (!success) {
        return (
            <div>
                <H2>Confirm Reservation</H2>
                <Grid container columns={2}>
                    <Grid item xs={1}>
                        <div className="reservation_summary">
                            <ReservationSummary {...props} />
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <div className="account">
                            <Account name={name} email={user?.email} />
                        </div>
                    </Grid>
                </Grid>
                <button onClick={() => navigate("/")}>Go Back</button>
                <button onClick={() => { setSuccess(true) }}>Confirm</button>
            </div>
        )
    }
    return (
        <div>
            <H1>Reserved!</H1>
            <P4>Your reservation has been confirmed.</P4>
            <P4>You will receive an email confirmation at <span className="email">{user?.email}.</span></P4>
            <button onClick={() => navigate("/")}>Back Home</button>
        </div>
    )
}

export default Confirmation;