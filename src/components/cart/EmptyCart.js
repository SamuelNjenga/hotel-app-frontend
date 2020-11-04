import React from 'react'
import Navigation from '../navigation/Navigation'
import Typography from '@material-ui/core/Typography'
const EmptyCart = () => {
  return (
    <div>
    <Navigation />
      <Typography variant="headline" component="h2">
				Your cart is currently empty
			</Typography>
    </div>
  )
}

export default EmptyCart
