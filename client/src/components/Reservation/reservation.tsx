import { useState } from 'react';
import './reservation.css';
import Modal from './Dropdown/dropdown';
import Calendar from 'react-calendar';
import { P1, P2, P5 } from '../../styles/fonts.style';
import TimeIcon from '../../assets/time.svg';
import { StyledButton2 } from '../../styles/button.style';

const Reservation = () => {

  const [fromIsOpen, setFromisOpen] = useState(false);
  const [toIsOpen, setToisOpen] = useState(false);

  const [value, onChange] = useState(new Date());

  console.log(value);

  return (
    <div className="Reservation">
      
      <div className='selectionPanel'>

        <div className='selectionPanel-title'><P1>Choose a Date & Time</P1></div>

        <Calendar className='react-calendar'
          next2Label = {null}
          prev2Label = {null}
          value = {value}
          onChange = {onChange}
          showNeighboringMonth = {false}
          view = {"month"}
          calendarType = {"US"}
        ></Calendar>

        <img src={TimeIcon} />

        <div className='selectionPanel-from'>
          <button className='selectionPanel-times' onClick={() => setFromisOpen(true)}>
          <div className='selectionPanel-titles'>Start time</div>
          </button>
          <Modal open={fromIsOpen}>
            <div className='dropdown'></div>
          </Modal>
        </div>

        <div className='selectionPanel-to'>
          <button className='selectionPanel-times' onClick={() => setToisOpen(true)}>
          <div className='selectionPanel-titles'>End time</div>
          </button>
          <Modal open={fromIsOpen}>
            <div className='dropdown'></div>
          </Modal>
        </div>
        <StyledButton2>Done</StyledButton2>
      </div>
    </div>
  );
}

export default Reservation;
