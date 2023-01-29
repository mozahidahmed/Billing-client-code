import React from 'react';
import { toast } from 'react-toastify';

const BillingRow = ({billing,index,refetch}) => {
    const {name,_id}=billing;

    
  
  

    return (
        <tr>
         <th>{index+1}</th>
        <td>{_id}</td>
        <td>Mozahid</td>
        <td>Mozahid</td>
        <td>Mozahid</td>
        <td>Mozahid</td>
        
        
        <td>
            <div className="flex px-2 gap-2">
            <button class="btn btn-xs">Edit</button>
            <button class="btn btn-xs">Delete</button>
            </div>
           
            
            </td>
      
        
      </tr>
    );
};

export default BillingRow;