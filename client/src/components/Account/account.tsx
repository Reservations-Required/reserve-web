import './account.css';

interface AccountInfo {
	name: string;
	email: string;
}

const Account = (props: AccountInfo) => {
	return (
		<div className="Account">
			<h2>Account</h2>
			<p>Name | {props.name}</p>
			<p>Email | {props.email}</p>
		</div>
	);
};

export default Account;