import { P4, P1 } from '../../styles/fonts.style';
import BuildingIcon from '../../assets/BuildingIcon.svg';
import TreeIcon from '../../assets/TreeIcon.svg';
import { BuildingSearchButton } from '../../styles/button.style';
import './BuildingSearch.css';


const BuildingSearch = () => {
    const campus: string[] = ["North Campus", "Engineering Quad", "Arts Quad", "Agriculture Quad"];
    const campusMap: React.ReactNode[] = campus.map((e) => { return <BuildingSearchButton> {e} </BuildingSearchButton> });

    const buildings: string[] = ["Toni Morrison Hall", "Ruth Bader Ginsburg Hall", "Barbara McClintock Hall", "Upson Hall", "Carpenter Hall", "Olin Library"];
    const buildingsMap: React.ReactNode[] = buildings.map((e) => { return <BuildingSearchButton> {e} </BuildingSearchButton> });
    return (
        <div className= "heading">
            <div className = "campus">
                <P1>
                    <img src={TreeIcon} />
                    Campus
                </P1>
                <P4>
                    {campusMap}
                </P4>
            </div>
            <div className="vl"></div>
            <div className = "buildings">
                <P1>
                    <img src={BuildingIcon} />
                    Building
                </P1>
                <P4>
                    {buildingsMap}
                </P4>
            </div>
        </div>
    );
};

export default BuildingSearch;