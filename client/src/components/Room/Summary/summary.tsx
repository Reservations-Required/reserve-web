import './summary.css';

import { TextField, Grid } from '@mui/material';
import DateIcon from '../../../assets/date2.svg';
import { P1, P3, P6 } from '../../../styles/fonts.style';
import PencilIcon from '../../../assets/pencilIcon.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface SummaryProps {
	building: string;
	room: string;
}

const Summary = (props: SummaryProps) => {
	const [purpose, setPurpose] = useState("");

	return (
		<div className="summary">
			<P1 className="header">Reservation Summary</P1>
			<div className='grid1'>

				<P6>Reservation Room </P6>
				<P3>{props.building} {props.room}</P3>

			</div>

			<div className='grid2'>
				<Grid className='sum2'>
					<div className='sum2-longcol1'>
						<img src={DateIcon} />
					</div>

					<div className='sum2-longrow'>
						<P3>Wednesday, April 20, 2022</P3>
					</div>

					<div className='sum2-longcol2'>
						<img src={PencilIcon} />
					</div>

					<div className='sum2-longrow'>
						<P3>11:00 AM - 12:00 PM</P3>
					</div>
				</Grid>
			</div>

			<div className='sum-purpose'>
				<P6 className='p-text'>Purpose</P6>
				<TextField className='purpose-text'
					variant="standard"
					placeholder="Why are you reserving this room? (optional)" 
					onChange = {(event) => {setPurpose(event.target.value)}}/>
				<div className='space'></div>
				<div className="reserve_btn">
					<Link to={`/confirmation?purpose=${purpose}&room=${props.building} ${props.room}`} style={{ textDecoration: 'none' }}><P1 className='rnow'>Reserve This Room</P1></Link>
				</div>
			</div>
		</div>
	)
}

export default Summary;