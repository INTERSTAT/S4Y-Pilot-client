import React from 'react';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { menuConfig } from './config';
import './menu.scss';

const InterstatMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<div className="menu-container">
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static" style={{ backgroundColor: '#9ba4cf' }}>
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={handleClick}
						>
							<MenuIcon />
						</IconButton>
						<Drawer
							anchor={'left'}
							open={open}
							onClose={handleClose}
							className="menu-drawer"
						>
							{menuConfig.map(({ label, route, icon }) => (
								<Link to={`/${route}`} key={route}>
									<ListItem button onClick={handleClose}>
										{icon && <ListItemIcon>{icon}</ListItemIcon>}
										<ListItemText primary={label} />
									</ListItem>
								</Link>
							))}
						</Drawer>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Interstat S4Y Pilot Services
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
};

export default InterstatMenu;
