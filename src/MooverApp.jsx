import { BrowserRouter, Route, Routes }
 from "react-router-dom";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Order } from "./components/Order";
import { Tracking } from "./components/Tracking";
import { OrdersData } from "./components/OrdersData.js";
import { useState } from "react";
import { useForm } from './components/hooks/useForm';
import './index.css'


const App = () => {

  const [ orders, setOrders ] = useState( JSON.parse( localStorage.getItem('orders') ));

  const [ formValues, handleInputChange, reset ] = useForm({
    ordercode: crypto.randomUUID().slice(0, 6),
		originname: '',
		originaddress: '',
		origindistrit: '',
		originphone: '',
		destinationname: '',
		destinationaddress: '',
		destinationdistrit: '',
		destinationphone: '',
		status: 'En proceso',
	});

  const [ lastOrder, setLastOrder ] = useState()

  return (
    <OrdersData.Provider
      value = {{
                orders,
                setOrders,
                formValues,
                handleInputChange,
                reset,
                lastOrder,
                setLastOrder
              }}
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element = { <Home/> }/>
          <Route path='/order' element = { <Order/> } />
          <Route path='/tracking' element = { <Tracking/> } />
          <Route path='/contact' element = { <Contact/> } /> 
        </Routes>
      </BrowserRouter>
    </OrdersData.Provider>
  )
};

export default App;
