import { useState } from 'react';
import './reservation.css';
import Modal from './Dropdown/dropdown';
import Calendar from 'react-calendar';

const Reservation = () => {

  const [fromIsOpen, setFromisOpen] = useState(false);
  const [toIsOpen, setToisOpen] = useState(false);

  return (
    <div className="Reservation">
      <div className='searchBar'></div>
      <div className='selectionPanel'>
        <div className='selectionPanel-title'>Choose a Date & Time</div>
        <Calendar className='selectionPanel-calendar'></Calendar>

        <div className='selectionPanel-from'>
          <div className='selectionPanel-titles'>From</div>
          <button className='selectionPanel-times' onClick={() => setFromisOpen(true)}>
            <div className='colon'>:</div>
          </button>
          <Modal open={fromIsOpen}>
            <div className='dropdown'></div>
          </Modal>
        </div>

        <div className='selectionPanel-to'>
          <div className='selectionPanel-titles'>To</div>
          <button className='selectionPanel-times' onClick={() => setToisOpen(true)}>
            <div className='colon'>:</div>
          </button>
          <Modal open={fromIsOpen}>
            <div className='dropdown'></div>
          </Modal>
        </div>

      </div>
    </div>
  );
}

export default Reservation;
