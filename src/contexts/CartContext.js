import React, { createContext, useState ,useContext} from 'react';

export const CartContext = createContext();
export function useCart () {
	return useContext(CartContext)
  }
export const CartProvider = (props) => {
    const [ carts, setCarts ] = useState([]);

	return (
		<CartContext.Provider value={{  carts, setCarts }}>
			{props.children}
		</CartContext.Provider>
	);
};
