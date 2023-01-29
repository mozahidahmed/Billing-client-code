import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';



const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm(); 

    return (
        <div className='flex justify-center items-center mt-16'>
        <div className="card w-96 bg-base-100 shadow-xl">
    <div className="card-body">
      <h2 className="text-center text-2xl font-bold">Sign Up</h2>
      <form >

        <div class="form-control w-full max-w-xs">
          
        <label class="label">
        <span class="label-text">Name</span>
        </label>
        <input type="text"
         placeholder="Write name" 
         class="input input-bordered w-full max-w-xs" 
         {...register("name", 
       
           {

          required:{
           value:true,
           message: 'name is required'

          },

        

          })} 
         />
        <label class="label">
        {errors.name?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.name.message}</span>}
       
        </label>
        </div>
       
       
       
        <div class="form-control w-full max-w-xs">
          
        <label class="label">
        <span class="label-text">Email</span>
        </label>
        <input type="email"
         placeholder="Write email" 
         class="input input-bordered w-full max-w-xs" 
         {...register("email", 
       
           {

          required:{
           value:true,
           message: 'email is required'

          },

          pattern: {
           value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
            message:"Provide a valid email"
         }

          })} 
         />
        <label class="label">
        {errors.email?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        {errors.email?.type === 'pattern' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
        </label>
        </div>
       


        <div class="form-control w-full max-w-xs">
          
        <label class="label">
        <span class="label-text">Password</span>
        </label>
        <input type="password"
         placeholder="Write password" 
         class="input input-bordered w-full max-w-xs" 
         {...register("password", {

          required:{ 
            value:true,
            message: 'password is required'

           },

          minLength: {
           value:6,
           message: 'Must Be a 6 Caracter'
          }

         })}
         />
        <label class="label">
        {errors.password?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        {errors.password?.type === 'minLength' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
        </label>
        </div>




  <input type="submit" className='btn  w-full max-w-xs' value="Sign Up"/>
  <p>Already Account..?<Link to="/login"><span className='text-primary'>......login</span></Link></p>
</form>

     
    </div>
  </div>
  </div>
    );
};

export default SignUp ;
 
