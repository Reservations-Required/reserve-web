import './account.css';
import { Grid } from '@mui/material';

interface AccountInfo {
	name: string;
	email: string | undefined | null;
}

const Account = (props: AccountInfo) => {
	return (
		<div className="Account">
			<h2>Account</h2>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} columns = {2}>
				<Grid item xs={1}>
					<h3>Name</h3>
				</Grid>
				<Grid item xs={1}>
					<p>{props.name}</p>
				</Grid>
				<Grid item xs={1}>
					<h3>Email</h3>
				</Grid>
				<Grid item xs={1}>
					<p>{props.email}</p>
				</Grid>
			</Grid>
		</div>
	);
};

export default Account;