import { BrowserRouter, Route, Routes }
 from "react-router-dom";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Order } from "./components/Order";
import { Tracking } from "./components/Tracking";
import './index.css'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element = { <Home/> }/>
        <Route path='/order' element = { <Order/> } />
        <Route path='/tracking' element = { <Tracking/> } />
        <Route path='/contact' element = { <Contact/> } /> 
      </Routes>
    </BrowserRouter>
  )
};

export default App;
