import { P4, P1 } from '../../styles/fonts.style';
import BuildingIcon from '../../assets/BuildingIcon.svg';
import TreeIcon from '../../assets/TreeIcon.svg';
const BuildingSearch = () => {
    return (
        <div>
            <P1>
                <img src={TreeIcon} />
                Campus
            </P1>
            <P4>
                North Campus
                Engineering Quad
                Arts Quad
                Agriculture Quad
            </P4>
            <P1>
                <img src={BuildingIcon} />
                Building
            </P1>
            <P4>
                Toni Morrison Hall
                Ruth Bader Ginsburg Hall
                Barbara McClintock Hall
                Upson Hall

            </P4>

        </div>
    );
};

export default BuildingSearch;