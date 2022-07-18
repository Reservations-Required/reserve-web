import { useState, useEffect } from 'react';
import { H1, H2, H3, H5, P1, P4, P6 } from '../../styles/fonts.style';
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

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Confirmation = (props: SummaryProps) => {
    const [success, setSuccess] = useState(false);
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");

    let navigate = useNavigate();

    async function makeReservation() {
        await fetch(`${SERVER_URL}/reservations/1`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                u_id: "zxqzhk70kJahWrkX2orBDKJCJoF2",
                start: {
                    year: 2022,
                    month: 3,
                    day: 22,
                    hour: 2,
                    minute: 0
                },
                end: {
                    year: 2022,
                    month: 3,
                    day: 22,
                    hour: 3,
                    minute: 0
                }
            })
        });

        setSuccess(true)
    }

    useEffect(() => {
        if (user != null) fetchUserName(user, setName);
    }, [user]);

    if (!success) {
        return (
            <div className="Confirmation">
                <div className="confirmation-heading">
                    <H2>Confirm Reservation</H2>
                </div>
                <div className="confirmation-content">
                    {/* <Grid container columns={2}>
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
                    </Grid> */}
                    <div className="reservation_summary">
                        <ReservationSummary {...props} />
                    </div>
                    <div className="account">
                        <Account name={name} email={user?.email} />
                    </div>
                </div>
                <div className="confirmation-buttons">
                    <div className="back" onClick={() => navigate(-1)}>
                        <P1>Go Back</P1>
                    </div>
                    <div className="confirm" onClick={() => {
                        makeReservation();
                    }}>
                        <H3>Confirm</H3>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="reserved-left">
                <div className="reserved-heading">
                    Reserved!
                </div>
                <div className="email-confirmation">
                    <P4>Your reservation has been confirmed. <br />You will receive an email confirmation at <span className="email">{user?.email}.</span></P4>
                </div>
                <div className="back-home" onClick={() => navigate("/")}>
                    <H3>Back Home</H3>
                </div>
            </div>
            <div className="reserved-right">
                <div className="image-purpose">
                    <div className="reserved-purpose">
                        <P1>Finals Study Session</P1>
                    </div>
                    <div className="reserved-image">
                        <img src="" />
                    </div>

                </div>
                <div className="reservation-info">
                    <div className="reserved-room">
                        <H5>Toni Morrison 218</H5>
                    </div>
                    <div className="reserved-time">
                        <P6>
                            Wednesday, April 20, 2022 <br />
                            11:00 AM - 2:00 PM
                        </P6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmation;