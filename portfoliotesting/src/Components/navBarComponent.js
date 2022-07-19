import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Link as RouterLink } from 'react-router-dom';

function NavBarComponent() {
	return(
		<AppBar position="sticky" class="header">
			<Container maxWidth="xl">
	        	<Toolbar disableGutters>
					<MenuItem key="Home" component={RouterLink} to="/">
						<Typography textAlign="center">Home</Typography>
					</MenuItem>
					<MenuItem key="Portfolio" component={RouterLink} to="/Portfolio">
						<Typography textAlign="center">Portfolio</Typography>
					</MenuItem>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default NavBarComponent;
