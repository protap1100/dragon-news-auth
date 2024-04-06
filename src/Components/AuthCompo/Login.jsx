import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = (e) =>{
        e.preventDefault();
       const email =  e.target.email.value;
       const password =  e.target.password.value;
       // console.log(password,email)
       signIn(email,password)
       .then(res=>{
        console.log('result',res)
       })
       .catch((error)=>{
        console.log(error,"failed")
       })
    }

    return (
        <div>
            <Navbar></Navbar>
           <div className="w-1/2 mx-auto">
                <div className="py-5 shadow-2xl bg-base-100">
                    <div>
                        <h1 className="mt-20 text-center font-bold text-3xl font-Poppins">Login Your Account</h1>
                    </div>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div>
                        <h1 className="text-center">Do not Have account <Link className="font-bold text-green-600" to="/register">Register</Link></h1>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Login;