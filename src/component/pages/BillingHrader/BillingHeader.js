import React,{useState} from 'react';
import BillingModal from './BillingModal';

const BillingHeader = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className="navbar mt-2">
  <div className="navbar-start p-2 bg-primary ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Homepage</a></li>
        <li><a>Portfolio</a></li>
        <li><a>About</a></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center p-2 bg-primary">
  <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
  </div>

  <div className="navbar-end p-2 bg-primary">
  <div className="">
  <button onClick={()=>{setShow(true)}} className="btn hover:bg-white hover:text-black btn-outline">AddBill</button>
  {show && <BillingModal/>}

    </div>
  </div>
  
</div>

        </div>
    );
};

export default BillingHeader;