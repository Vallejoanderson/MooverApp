import { BrowserRouter, Route, Routes }
 from "react-router-dom";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Order } from "./components/Order";
import { Tracking } from "./components/Tracking";
import { OrdersData } from "./components/OrdersData.js";
import { useState } from "react";
import './index.css'


const App = () => {

  const [ orders, setOrders ] = useState({});

  return (
    <OrdersData.Provider
      value = {{
                orders,
                setOrders
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
