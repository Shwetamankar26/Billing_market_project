import LogIn from "./Components/LogIn";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AddUser from "./Components/Auth_components/AddUser";
import Login2Trial from "./Components/Login2Trial";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nabar from "./Components/Auth_components/Nabar";
import Emil from "./Components/Emil";
import UpdatePassword from "./Components/Auth_components/UpdatePassword";

function App() {
  return (
    
    <>
   <BrowserRouter>
     <Nabar/>
   <Routes>
    <Route path='/login' element={<Login2Trial/>}></Route>
    <Route path='/auth' element={<AddUser/>}></Route>
    <Route path='/login2' element={<LogIn/>}></Route>
    {/* <Route path='/login2' element={<LogIn/>}></Route> */}
    <Route path='/email' element={<Emil/>}></Route>
    <Route path='/update/:userId' element={<UpdatePassword/>}></Route>
   </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
