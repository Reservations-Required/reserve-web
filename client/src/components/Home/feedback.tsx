import { H2, P3 } from '../../styles/fonts.style';
import './feedback.css';
import ContactButton from '../../assets/contactButton.svg';

const Home = () => {

    return (
        <div className='feedback'>
            <H2>Got Feedback?</H2>

            <P3 className='feedback-text'>
                Feel free to reach out to us with any comments you may
                have about your reservation experience. We’d love to
                hear your opinions and any improvements we could make.
            </P3>

            <img className="c" src={ContactButton}></img>
        </div>

    );
}

export default Home;