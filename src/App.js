
import './App.css';
import Header from './component/shared/Header';
import Footer from './component/shared/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import SignUp from './component/pages/SignUp/SignUp';
import Login from './component/pages/SignUp/Login';
import Billings from './component/pages/BillingSheet/Billings';


function App() {
  return (
    <div className="">
     <Header/>
  

<Routes>
<Route path="registration" element={<SignUp/>}></Route> 
<Route path="login" element={<Login/>}></Route>  
<Route path="billing-list" element={ <Billings/>}></Route> 
</Routes>
 


    <Footer/>
    </div>
  );
}

export default App;
