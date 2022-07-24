import { useState } from 'react';
import './reservation.css';
import Modal from './Dropdown/dropdown';
import Calendar from 'react-calendar';
import { P1, P2, P5 } from '../../styles/fonts.style';
import { TextField } from '@mui/material';
import BuildingSearch from '../BuildingSearch/BuildingSearch';

const Reservation = () => {

  const [fromIsOpen, setFromisOpen] = useState(false);
  const [toIsOpen, setToisOpen] = useState(false);

  const [date, onChange] = useState(new Date());
  const time = new Date();
  const [start, startChange] = useState(time.getHours() + ":00");
  const [end, endChange] = useState(time.getHours() + 1 + ":00");

  const startTime = () => {
    return (
      <div>
        <TextField
          id="time"
          type="time"
          defaultValue={time.getHours() + ":00"}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 1800, // 30 mins
          }}
          sx={{ width: 150 }}
          onChange={(e) => { startChange(e.target.value) }}
        />
      </div>
    )
  }
  const endTime = () => {
    return (
      <div>
        <TextField
          id="time"
          type="time"
          defaultValue={time.getHours() + 1 + ":00"}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 1800, // 30 mins
          }}
          sx={{ width: 150 }}
          onChange={(e) => { endChange(e.target.value) }}
        />

      </div>
    )
  }

  const [returnData, setReturnData] = useState({ date: "", start: "", end: "" });

  async function handleSubmit() {
    setReturnData({
      date: `${date.toDateString()}`,
      start: `${start}`,
      end: `${end}`
    })
  }

  console.log(returnData)

  return (
    <div className="Reservation">
      <div className='selectionPanel'>

        <div className='selectionPanel-title'><P1>Choose a Date & Time</P1></div>
        <div className="selectionPanel-content">
          <Calendar className='selectionPanel-calendar'
            next2Label={null}
            prev2Label={null}
            value={date}
            onChange={onChange}
            showNeighboringMonth={false}
            view={"month"}
            calendarType={"US"}
          />

          <div className="selectionPanel-timePanel">

            <div className='selectionPanel-from'>
              <button className='selectionPanel-times-from' onClick={() => setFromisOpen(!fromIsOpen)}>
                <div className='selectionPanel-titles'>Start time</div>
              </button>
             {fromIsOpen && startTime()}
              {/* <Modal open={fromIsOpen}>
            <div className='dropdown'></div>
          </Modal> */}

            </div>
            
            <P2 className="to">to</P2>

            <div className='selectionPanel-to'>
              <button className='selectionPanel-times-to' onClick={() => setToisOpen(!toIsOpen)}>
                <div className='selectionPanel-titles'>End time</div>
              </button>
              {/* <Modal open={toIsOpen}>
            <div className='dropdown'></div>
          </Modal> */}
              {toIsOpen && endTime()}
            </div>
          </div>

        </div>
      </div>
      <div className="selectionPanel-submit" onClick={handleSubmit}>
        <P2 className="selectionPanel-text">Done</P2>
      </div>
      <BuildingSearch/>
    </div>
  );
}

export default Reservation;
