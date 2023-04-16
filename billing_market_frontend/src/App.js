import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Daily_sales from './Components/Sales_components/Daily_sales';
import Monthly_sales from './Components/Sales_components/Monthly_sales';
import Quaterly_sales from './Components/Sales_components/Quaterly_sales';
import Weeklysales from './Components/Sales_components/Weeklysales';
import Sidebar from "./Components/Sidebar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Auth_components/Layout/Navbar';
import AddUser from './Components/Auth_components/AddUser';
import ShowUser from './Components/Auth_components/ShowUser';
import Edit from './Components/Auth_components/Edit';
import Delete from './Components/Auth_components/Delete';
import LogIn from './Components/LogIn';
import Login from './Components/Auth_components/Login';
import { Logout } from './Components/Auth_components/Logout';
import Home from './Components/Auth_components/Home';
import './Components/Auth_components/interceptor/axios';
import Admin from './Components/Auth_components/Dashboard/Admin';
import Manager from './Components/Auth_components/Dashboard/Manager';
import { FaCashRegister } from 'react-icons/fa';
import Cashier from './Components/Auth_components/Dashboard/Cashier';
import Staff from './Components/Auth_components/Dashboard/Staff';



function App() {
  return (
    
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/Daily_Sales' element={<Daily_sales/>}/>
      <Route path='/Monthly_Sales' element={<Monthly_sales/>}/>
      <Route path='/Quaterly_Sales' element={<Quaterly_sales/>}/>
      <Route path='/Weekly_Sales' element={<Weeklysales/>}/>
      <Route path='/signin' element={<LogIn/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/axios' element={<axios/>}/>
      <Route path='/auth_component/add' element={<AddUser/>}/>
      <Route path='/auth_component/show' element={<ShowUser/>}/>
      <Route path='/auth_component/edit/:userId/' element={<Edit/>}/>
      <Route path='/auth_component/delete/:userId/' element={<Delete/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/manager' element={<Manager/>}/>
      <Route path='/cashier' element={<Cashier/>}/>
      <Route path='/staff' element={<Staff/>}/>
    </Routes>
    
    </BrowserRouter>
  
    </>
  );
}

export default App;
