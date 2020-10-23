import React from 'react';
import MenuItem from './MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Navigation from '../navigation/Navigation';
import { useMenuItems } from '../../contexts/MenuItemContext';
const MenuItemsList = () => {
	const {menuItems,isLoading} = useMenuItems()
	if (isLoading) {
		return (
			<div>
				<Navigation/>
				<div className="container">
					<CircularProgress />
				</div>
			</div>
		);
	}
	return (
		<div>
			<Navigation />
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<Typography variant="h4" component="h4">
					Available Menu Items
				</Typography>
			</div>
			<Grid container spacing={2} style={{ padding: 24 }}>
				{menuItems.map((item, value) => (
					<Grid key={value} item xs={12} sm={6} lg={3} xl={3}>
						<MenuItem
							key={item.id} {...item}
						/>
					</Grid>
				))}
			
			</Grid>
		</div>
	);
};

export default MenuItemsList;
