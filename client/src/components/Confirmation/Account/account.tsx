import './account.css';
import { Grid } from '@mui/material';
import { P1, P3, P6 } from '../../../styles/fonts.style';

interface AccountInfo {
	name: string;
	email: string | undefined | null;
}

const Account = (props: AccountInfo) => {
	return (
		<div className="Account">
			<div className="account-heading">
				<P1>Personal Information</P1>
			</div>
			<div className="account-content">
				<Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} columns={2}>
					<Grid item xs={1}>
						<P6 className="heading">Name</P6>
					</Grid>
					<Grid item xs={1}>
						<P3>{props.name}</P3>
					</Grid>
					<Grid item xs={1}>
						<P6 className="heading">Email</P6>
					</Grid>
					<Grid item xs={1}>
						<P3>{props.email}</P3>
					</Grid>
				</Grid>
			</div>

		</div>
	);
};

export default Account;