interface Props {
	name: string;
	email: string;
}

const Account = (props: Props) => {
	return (
		<div>
			<h2>Account</h2>
			<p>Name</p>
			<p>{props.name}</p>
			<p>Email</p>
			<p>{props.email}</p>
		</div>
	);
};

export default Account;