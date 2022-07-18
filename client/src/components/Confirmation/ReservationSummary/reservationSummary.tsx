import { Grid } from '@mui/material';
import { P1, P3, P6 } from '../../../styles/fonts.style';

interface SummaryInfo {
	room: string;
	date: string;
	time: string;
	purpose: string;
}

const ReservationSummary = (props: SummaryInfo) => {
	return (
		<div className="Summary">
			<P1 className="SummaryTitle">Reservation Summary</P1>
			<div className="SummaryContent">
				<Grid container columns={12} spacing={0}>
					<Grid item xs={6} m={0}>
						<P6 className="heading">Reservation Room</P6>
					</Grid>
					<Grid item xs={6} m={0}>
						<P3>{props.room}</P3>
					</Grid>
					<Grid item xs={6} m={0}>
						<P6 className="heading">Date/Time</P6>
					</Grid>
					<Grid item xs={6} m={0}>
						<P3>{props.date}<br />{props.time}</P3>
					</Grid>
					<Grid item xs={6} m={0}>
						<P6 className="heading">Purpose</P6>
					</Grid>
					<Grid item xs={6} m={0}>
						<P3>{props.purpose}</P3>
					</Grid>
				</Grid>
				{/* <div className="section1">
					<P6 className="heading">Reservation Room</P6>
					<P3 className="section-content">{props.room}</P3>
				</div>
				<div className="section2">
					<P6 className="heading">Date/Time</P6>
					<P3 className="section-content">{props.date}<br />{props.time}</P3>
				</div>
				<div className="section3">
					<P6 className="heading">Purpose</P6>
					<P3 className="section-content">{props.purpose}</P3>
				</div> */}
			</div>
		</div>
	);
}

export default ReservationSummary;