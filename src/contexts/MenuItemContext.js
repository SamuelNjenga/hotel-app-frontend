import React, { createContext, useState ,useContext,useEffect} from 'react';
import { getMenuItems } from '../util/APIUtils';

export const MenuItemContext = createContext();
export function useMenuItems () {
	return useContext(MenuItemContext)
  }
export const MenuItemProvider = (props) => {
    const [ menuItems, setMenuItems ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);

        const fetchMenuItems = async () => {
            const res = await  getMenuItems()
            const data = res.data
            setMenuItems(data)
            setLoading(false)
        }
        useEffect(() => {
        fetchMenuItems()
        }, [])

	return (
		<MenuItemContext.Provider value={{  menuItems, setMenuItems,isLoading,setLoading }}>
			{props.children}
		</MenuItemContext.Provider>
	);
};
