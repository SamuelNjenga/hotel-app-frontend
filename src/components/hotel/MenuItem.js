import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	typo: {
		color: 'black'
	},
	btn: {
		color: 'primary',
		variant: 'outlined',
		size: 'large'
	}
});

const MenuItem = ({itemName,itemDescription,itemPrice}) => {
	const classes = useStyles();

	return (
		<div>
			<Card raised={true}>
				{/* <CardMedia  title="Halloss"/> */}
				<CardContent>
					<Typography gutterBottom  component="h5">
						Item Name : {itemName}
					</Typography>
					<Typography   component="h5">
						Description : {itemDescription}
					</Typography>
					<Typography   component="h5">
						Item Price : KSH {itemPrice}
					</Typography>
				</CardContent>
				<CardActions>
					<Link to="/bikedescription" style={{ textDecoration: 'none' }}>
						<Button color="primary" variant="outlined" className={classes.btn} onClick={() => console.log('clicked')}>
							View More
						</Button>
					</Link>

					<Button color="primary" variant="outlined" className={classes.btn} onClick={() => console.log('clicked')}>
						Add To Cart
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

export default MenuItem;
