import React from 'react';
import { useQuery } from 'react-query';
import BillingHeader from '../BillingHrader/BillingHeader';
import BillingRow from './BillingRow';



const Billings = () => {


    const {data:billing,isLoading,refetch}=useQuery('users',()=>fetch('https://mechanicalparts.onrender.com/service',{
  
    method:'GET',
    headers:{
        'content-type': 'application/json'
        
    }


    }).then(res=>res.json()))
if(isLoading){
return <h1>Loading</h1>
}


    return (
        <div className='px-12'>
        <div class="overflow-x-auto mt-12">
          <BillingHeader/>
<table className="table w-full">

<thead>
<tr>
  <th>No:</th>
  <th>Billing id</th>
  <th>Full Name</th>
  <th>Email</th>
  <th>Phone</th>
  <th>Paid Amount</th>
  <th>Action</th>
  
 
</tr>
</thead>
<tbody>

{
billing.map((billing,index)=><BillingRow billing={billing} index={index} refetch={refetch}></BillingRow> 
)}
</tbody>
</table>
              
</div>
  </div>
    );
};

export default Billings;