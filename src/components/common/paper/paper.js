import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const StyledPaperInterstat = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	color: theme.palette.text.secondary,
	borderRadius: 25,
	fontSize: 12,
}));

const PaperInterstat = ({ children }) => (
	<StyledPaperInterstat elevation={8}>{children}</StyledPaperInterstat>
);

export default PaperInterstat;
