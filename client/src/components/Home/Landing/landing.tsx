import './landing.css';
import { StyledButton } from '../../../styles/button.style';


const Landing = () => {
    const buildings: string[] = ["Morrison 218", "Morrison 220", "Morrison 222", "Morrison 224"];
    const buildingsMap: React.ReactNode[] = buildings.map((e) => { return <StyledButton> {e} </StyledButton> });

    return (
        <div>
            <div className="center">
                <h1> Suggestions </h1>
                {buildingsMap}
            </div>
        </div>
    );
};

export default Landing;