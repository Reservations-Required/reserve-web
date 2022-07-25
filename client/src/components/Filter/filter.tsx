import './filter.css'
import { P2, P3 } from '../../styles/fonts.style';
import { FormControlLabel, Checkbox } from '@mui/material'
import { useState } from 'react';

const amenities = ["TV", "Whiteboard", "Power Outlet", "Wheelchair Accessible"]
const capacity = ["Individual", "2-5", "6-10", "11+"]

const Filter = () => {
    // const amenitiesSelected = new Set()
    const amenitiesSelected: string[] = []
    const capacitySelected: string[] = []

    // AMENITIES HANDLER
    const amenitiesInitialize = amenities.map(x => [x, false])
    const amenitiesObj = Object.fromEntries(amenitiesInitialize)

    const [amenitiesChecked, setAmenitiesChecked] = useState(amenitiesObj)
    let amenitiesArr = Object.entries(amenitiesChecked)

    for (let i = 0; i < amenitiesArr.length; i++) {
        if (amenitiesArr[i].includes(true)) {
            amenitiesSelected.push(amenitiesArr[i][0])
        }
    }

    // CAPACITY HANDLER
    const capacityInitialize = amenities.map(x => [x, false])
    const capacityObj = Object.fromEntries(capacityInitialize)

    const [capacityChecked, setCapacityChecked] = useState(capacityObj)
    let capacityArr = Object.entries(capacityChecked)

    for (let i = 0; i < capacityArr.length; i++) {
        if (capacityArr[i].includes(true)) {
            capacitySelected.push(capacityArr[i][0])
        }
    }

    // TODO: call get all selected rooms from backend?
    function handleChange(event: any, filter: string) {
        let { id } = event.target
        // if filter is checked, add to list
        // else, remove from list
        // if (event.target.checked) {
        //     amenitiesSelected.add(id)
        // }

        // if (event.target.checked == false) {
        //     amenitiesSelected.delete(id)
        // }
        if (filter === "amenities") {
            setAmenitiesChecked({ ...amenitiesChecked, [id]: event.target.checked })
        } else if (filter === "people") {
            setCapacityChecked({ ...capacityChecked, [id]: event.target.checked })
        }
    }

    // reset all filters to unchecked
    // TODO: still need to find a way to change all filters to unchecked
    function resetFilter() {
        // clears lists of selected filters
        // then calls get all rooms from backend
        // amenitiesSelected.clear()

        setAmenitiesChecked(amenitiesInitialize);
        setCapacityChecked(capacityInitialize);
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
                        return <FormControlLabel
                            key={val}
                            control={<Checkbox id={val} sx={{ '&.Mui-checked': { color: '#ffc38b' } }} />}
                            label={val}
                            checked={amenitiesChecked[val] || false}
                            onChange={(e) => { handleChange(e, "amenities") }} />
                    })}
                </div>
            </div>
            <div className="people_text">
                <P3>People</P3>
            </div>
            <div className="people_options">
                <div>
                    {capacity.map((val) => {
                        return <FormControlLabel
                            key={val}
                            control={<Checkbox id={val} sx={{ '&.Mui-checked': { color: '#ffc38b' } }} />}
                            label={val}
                            checked={capacityChecked[val] || false}
                            onChange={(e) => { handleChange(e, "people") }} />
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