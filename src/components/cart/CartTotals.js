import React from 'react';
import Typography  from '@material-ui/core/Typography'
import { useCart } from '../../contexts/CartContext';
const CartTotals = () => {
	const {carts} = useCart()
	const totalPrice = carts.reduce((acc, curr) => acc + curr.price * curr.count, 0);
	return (
		<div>
			<Typography variant="subtitle1" >
			{totalPrice}
			</Typography>
		</div>
	);
};

export default CartTotals;
