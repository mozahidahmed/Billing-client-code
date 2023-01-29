import React from 'react';



const Header = () => {
  
 
    return (
        <div className="px-12  bg-primary">
<div className="navbar">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">billing.com</a>
  </div>
  <div className="flex-none">
   <h1 className='font-bold '>Total Billing: <span>0</span> </h1>
  </div>
</div>
        </div>
       
    );
};

export default Header;