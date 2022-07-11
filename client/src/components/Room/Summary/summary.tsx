import './summary.css';

import { TextField, Grid } from '@mui/material';
import DateIcon from '../../../assets/date.svg';
import { H3, P1, P3, P6, P7 } from '../../../styles/fonts.style';
import { StyledButton2 } from '../../../styles/button.style';
import { useState } from 'react';

interface SummaryProps {
	building: string;
	room: string;
}

const Summary = (props: SummaryProps) => {
	return (
		<div className="summary">
			<P1 className="header">Reservation Summary</P1>
			<Grid container columns={2}>
				<Grid item xs={1}>
					<P6>Reservation Room </P6>
				</Grid>
				<Grid item xs={1}>
					<P3>{props.building} {props.room}</P3>
				</Grid>
			</Grid>
			<Grid container columns={2}>
				<Grid item xs = {1}>
					<img src={DateIcon} />
				</Grid>
				<Grid item xs={1}>
					<P3>Wednesday, April 20, 2022</P3>
				</Grid>
				<Grid item xs = {1}/>
				<Grid item xs={1}>
					<P3>11:00 AM - 12:00 PM</P3>
				</Grid>
			</Grid>
			<P6>Purpose</P6>
			<TextField variant="standard" label="Why are you reserving this room? (optional)" />
			<StyledButton2 className="reserve_btn">Reserve This Room</StyledButton2>
		</div>
	)
}

export default Summary;