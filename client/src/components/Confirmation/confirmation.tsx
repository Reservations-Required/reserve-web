import { useState } from 'react';
import { H1, H2, P4 } from '../../styles/fonts.style';
import { useNavigate } from 'react-router-dom';
import './confirmation.css';

const Confirmation = () => {
    const [success, setSuccess] = useState(false);
    let navigate = useNavigate();

    if (!success) {
        return (
            <div>
                <H2>Confirm Reservation</H2>
                <button onClick={() => {setSuccess(true)}}>Confirm</button>
            </div>
        )
    }
    return (
        <div>
            <H1>Reserved!</H1>
            <P4>Your reservation has been confirmed.</P4>
            <P4>You will receive an email confirmation at <span className="email">[EMAIL].</span></P4>
            <button onClick={() => navigate("/")}>Back Home</button>
        </div>
    )
}

export default Confirmation;