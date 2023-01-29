
import { useForm } from "react-hook-form";

import { Link, useLocation, useNavigate } from 'react-router-dom';




const Login = () => {




 const { register, formState: { errors }, handleSubmit } = useForm(); 
 




    return (
      <div className='flex justify-center items-center mt-16'>
            <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form>

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



      <p className="text-red-500"></p>
      <input type="submit" className='btn  w-full max-w-xs' value="Login"/>
      <p>New to my company ?<Link to="/registration"><span className='text-primary'>..Create New Acccotunt</span></Link></p>
    </form>

          {/* <div class="divider">OR</div>
          <button
           onClick={() =>signInWithGoogle()}
          class="btn btn-outline">Continue with Google</button> */}
        </div>
      </div>
      </div>

    );
};

export default Login;