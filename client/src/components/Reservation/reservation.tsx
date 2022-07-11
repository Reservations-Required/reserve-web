import { useState } from 'react';
import './reservation.css';
import Modal from './Dropdown/dropdown';
import Calendar from 'react-calendar';
import { P1, P2, P5 } from '../../styles/fonts.style';
import TimeIcon from '../../assets/time.svg';
import { StyledButton2 } from '../../styles/button.style';
import { TextField } from '@mui/material';

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
          onChange = {(e) => {startChange(e.target.value)}}
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
          onChange = {(e) => {endChange(e.target.value)}}
        />

      </div>
    )
  }

  function handleSubmit() {
    console.log(date.toDateString());
    console.log(start);
    console.log(end);
  }

  return (
    <div className="Reservation">

      <div className='selectionPanel'>

        <div className='selectionPanel-title'><P1>Choose a Date & Time</P1></div>

        <Calendar className='react-calendar'
          next2Label={null}
          prev2Label={null}
          value={date}
          onChange={onChange}
          showNeighboringMonth={false}
          view={"month"}
          calendarType={"US"}
        />

        <img src={TimeIcon} />

        <div className='selectionPanel-from'>
          <button className='selectionPanel-times' onClick={() => setFromisOpen(!fromIsOpen)}>
            <div className='selectionPanel-titles'>Start time</div>
          </button>
          <div className="dropdown">{fromIsOpen && startTime()}</div>
          {/* <Modal open={fromIsOpen}>
            <div className='dropdown'></div>
          </Modal> */}

        </div>

        <div className='selectionPanel-to'>
          <button className='selectionPanel-times' onClick={() => setToisOpen(!toIsOpen)}>
            <div className='selectionPanel-titles'>End time</div>
          </button>
          {/* <Modal open={toIsOpen}>
            <div className='dropdown'></div>
          </Modal> */}
          <div className="dropdown">{toIsOpen && endTime()}</div>
        </div>
        
        <StyledButton2 onClick = {handleSubmit}>Done</StyledButton2>
      </div>
    </div>
  );
}

export default Reservation;
