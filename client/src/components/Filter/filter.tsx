import './filter.css'
import { P2, P3 } from '../../styles/fonts.style';
import { FormControlLabel, Checkbox } from '@mui/material'

const amenities = ["TV", "Whiteboard", "Power Outlet", "Wheelchair Accessible"]

const Filter = () => {
    const amenitiesSelected = new Set()

    function handleChange(event: any) {
        let { id } = event.target
        // if filter is checked, add to list
        // else, remove from list
        if (event.target.checked) {
            amenitiesSelected.add(id)
        }
        
        if (event.target.checked == false) {
            amenitiesSelected.delete(id)
        }
        console.log(amenitiesSelected)

        // TODO: call get all selected rooms from backend?
    }

    // reset all filters to unchecked
    function resetFilter() {
        // clears lists of selected filters
        // then calls get all rooms from backend
        amenitiesSelected.clear()

        // TODO: still need to find a way to change all filters to unchecked
    }

    return (
        <div className='filter'>
            <div className='filter_text'>
                <P2>Filter by</P2>
            </div>
            <div className='amenities_text'>
                <P3>Amenities</P3>
            </div>
            <div className='amenities_options'>
                <div>
                    {amenities.map((val) => {
                    return <FormControlLabel control={<Checkbox id={val}/>} label={val} onChange={(e) => {handleChange(e)}} />
                    })}
                </div>
            </div>
            <button className='reset_button' onClick={resetFilter}>
                <P3>Reset all</P3>
            </button>
        </div>
    )
}

export default Filter