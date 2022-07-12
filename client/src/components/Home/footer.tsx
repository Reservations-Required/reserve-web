import './footer.css';
import { H2, P7 } from '../../styles/fonts.style';
import LOGO from '../../assets/roomservationW.svg';
import { NavLink } from "react-router-dom";

const Home = () => {

    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-left'>
                    <img className='footerLogo' src={LOGO}></img>
                </div>

                <div className='footer-right'>
                    <P7>Team</P7>
                    <NavLink to="/admin" className='admin' >
                        <P7>Admin</P7>
                    </NavLink>
                    <P7>Contact Us</P7>
                </div>
            </div>

            <div className='footer-bottom'>
                <P7>made by Reservations Required © 2022 </P7>
            </div>

        </div>

    );
}

export default Home;