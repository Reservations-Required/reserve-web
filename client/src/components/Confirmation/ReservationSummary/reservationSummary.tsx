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
			<P1>Reservation Summary</P1>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} columns={2}>
				<Grid item xs={1}>
					<P6 className="heading">Reservation Room</P6>
				</Grid>
				<Grid item xs={1}>
					<P3>{props.room}</P3>
				</Grid>
				<Grid item xs={1}>
					<P6 className="heading">Date/Time</P6>
				</Grid>
				<Grid item xs={1}>
					<P3>{props.date}</P3>
				</Grid>
				<Grid item xs={1} />
				<Grid item xs={1}>
					<P3>{props.time}</P3>
				</Grid>
				<Grid item xs={1}>
					<P6 className="heading">Purpose</P6>
				</Grid>
				<Grid item xs={1}>
					<P3>{props.purpose}</P3>
				</Grid>
			</Grid>
		</div>
	);
}

export default ReservationSummary;