import React from 'react'
import Typography from '@material-ui/core/Typography'
import Navigation from '../navigation/Navigation'
import { useCart } from '../../contexts/CartContext'
import EmptyCart from './EmptyCart'
import CartTotals from './CartTotals'

const Cart = () => {
    const {carts} = useCart()
  return (
    <div>
    {carts.length > 0 ? (
				<>
				<Navigation />
					<div>
						<div>
							<Typography variant="headline" component="h1">
								My Cart
							</Typography>
						</div>
						<div className="cartMain">
							<Typography variant="h5">
								ITEM NAME
							</Typography>
							<Typography variant="h5">
								ITEM PRICE
							</Typography>
							<Typography variant="h5">
								ITEM COUNT
							</Typography>
							<Typography variant="h5">
								ITEM TOTALS
							</Typography>
						</div>
					</div>

					{carts.map((item) => (
						<div>
							<div className="cartMain">
								<Typography variant="subtitle1">
									{item.itemName}
								</Typography>
								<Typography variant="subtitle1">
									{item.price}
								</Typography>
								<Typography variant="subtitle1">
									{item.count}
								</Typography> 
								<Typography variant="subtitle1">
									{item.price * item.count}
								</Typography>
							</div>
						</div>
					))}
					<CartTotals />
				</>
			) : (
				<EmptyCart />
			)}
    </div>
  )
}

export default Cart
