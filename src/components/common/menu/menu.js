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

import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';

// const InterstatMenu = () => {
// 	const [anchorEl, setAnchorEl] = React.useState(null);
// 	const open = Boolean(anchorEl);
// 	const handleClick = (event) => {
// 		setAnchorEl(event.currentTarget);
// 	};
// 	const handleClose = () => {
// 		setAnchorEl(null);
// 	};
// 	return (
// 		<div className="menu-container">
// 			<Box sx={{ flexGrow: 1 }}>
// 				<AppBar position="static" style={{ backgroundColor: '#9ba4cf' }}>
// 					<Toolbar>
// 						<IconButton
// 							size="large"
// 							edge="start"
// 							color="inherit"
// 							aria-label="menu"
// 							sx={{ mr: 2 }}
// 							onClick={handleClick}
// 						>
// 							<MenuIcon />
// 						</IconButton>
// 						<Drawer
// 							anchor={'left'}
// 							open={open}
// 							onClose={handleClose}
// 							className="menu-drawer"
// 						>
// 							{menuConfig.map(({ label, route, icon }) => (
// 								<Link to={`/${route}`} key={route}>
// 									<ListItem button onClick={handleClose}>
// 										{icon && <ListItemIcon>{icon}</ListItemIcon>}
// 										<ListItemText primary={label} />
// 									</ListItem>
// 								</Link>
// 							))}
// 						</Drawer>
// 						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// 							Interstat S4Y Pilot Services
// 						</Typography>
// 					</Toolbar>
// 				</AppBar>
// 			</Box>
// 		</div>
// 	);
// };

const InterstatMenu = () => {


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
	<div className="menu-container">
	<Box sx={{ flexGrow: 1 }}>

    <AppBar position="static" style={{ backgroundColor: '#9ba4cf' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
		  {/* <HomeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />  */}
          
		  {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Home2
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
			  className="menu-drawer"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' } 
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
			  			{menuConfig.map(({ label, route, icon }) => (
				            // <Button
							//   key={page}
							//   onClick={handleCloseNavMenu}
							//   sx={{ my: 2, color: 'white', display: 'block' }}
							// >
							//   {page}
							// </Button>

								<Link to={`/${route}`} key={route} >
									<ListItem button onClick={handleClose}>
										{icon && <ListItemIcon >{icon}</ListItemIcon>}
										<ListItemText primary={label} />
									</ListItem>
								</Link>
			))}
            </Menu>

          </Box>

          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
		  <HomeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> 
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'revert',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Home
          </Typography>

          <Box  className="menu-box" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}


			{menuConfig.map(({ label, route, icon }) => 
			
			(
				            // <Button
							//   key={page}
							//   onClick={handleCloseNavMenu}
							//   sx={{ my: 2, color: 'white', display: 'block' }}
							// >
							//   {page}
							// </Button>

							// disableGutters={true}
							// disablePadding
								<Link to={`/${route}`} key={route}>
									<ListItem sx={{ color: 'white' }} button onClick={handleClose}>
									    <ListItemText primary={label} sx={{ paddingRight: '0.8em' }}  />
										<ListItemIcon sx={{ color: 'white', display: 'block',  margin: '0', paddingLeft: '0' }} >{icon}</ListItemIcon>
									</ListItem>
								</Link>
			)
			)}

          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

        </Toolbar>
      </Container>
    </AppBar>
	</Box>
</div>
  );


};

export default InterstatMenu;
