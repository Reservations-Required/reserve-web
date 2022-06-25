import { styled } from '@mui/system';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)({
	color: '#a8a9aa',
	backgroundColor: '#f0faf9',
	margin: '5px',
	borderRadius: '20px',
	border: '2px solid #a8a9aa',
	'&:hover': {
		backgroundColor: '#76d0cc',
		color: 'white'
	}
});

export const StyledButton2 = styled(Button)({
	color: '#FFFFFF',
	backgroundColor: '#FFC38B',
	borderRadius: '25px',
});