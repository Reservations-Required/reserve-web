import './summary.css';

import { TextField, Grid } from '@mui/material';
import DateIcon from '../../../assets/date2.svg';
import { H3, P1, P3, P6, P7 } from '../../../styles/fonts.style';
import { StyledButton2 } from '../../../styles/button.style';
import { useState } from 'react';
import PencilIcon from '../../../assets/pencilIcon.svg';
import { useNavigate } from 'react-router-dom';

interface SummaryProps {
	building: string;
	room: string;
}

const Summary = (props: SummaryProps) => {
	const navigate = useNavigate();
	
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
					placeholder="Why are you reserving this room? (optional)" />
				<div className='space'></div>
				<div className="reserve_btn" onClick={() => navigate("/confirmation")}>
					<P1 className='rnow'>Reserve This Room</P1>
				</div>
			</div>
		</div>
	)
}

export default Summary;