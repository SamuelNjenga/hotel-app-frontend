import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import { LoginProvider } from './contexts/LoginContext';
import About from './components/about/About';
import HotelRegistration from './components/hotel/HotelRegistration';
import ContactRegistration from './components/contact/ContactRegistration';
import CustomerRegistration from './components/customer/CustomerRegistration';
import HotelServices from './components/hotel/HotelServices';
import MenuItemsList from './components/hotel/MenuItemsList';
import { MenuItemProvider } from './contexts/MenuItemContext';

function App() {
  return (
    <LoginProvider>
    <MenuItemProvider>
			<Router>
				<Switch>
					<Route path="/" exact={true} component={Home} />
          <Route path="/menuItems" exact={true} component={MenuItemsList} />
          <Route path="/about" exact={true} component={About} />
          <Route path="/contact/register" exact={true} component={ContactRegistration} />
          <Route path="/hotel/registration" exact={true} component={HotelRegistration} />
          <Route path="/hotel/services" exact={true} component={HotelServices} />
          <Route path="/customer/registration" exact={true} component={CustomerRegistration} />
        </Switch>
      </Router>
      </MenuItemProvider>
      </LoginProvider>  
  );
}

export default App;
