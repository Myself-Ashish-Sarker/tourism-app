import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {

    const navigate = useNavigate();

    const { signIn } = useContext(AuthContext);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        console.log("Google sign in");

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    icon: "success",
                    title: "You Logged in with Google",
                    showConfirmButton: false,
                    timer: 1500
                })
                    .then(() => {
                        navigate('/');
                    })
            })
            .catch(err => {
                console.log("error", err.message);
            })
    }

    const handleGithubSignIn = () => {
        console.log("Github Sign in");

        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                Swal.fire({
                    icon: "success",
                    title: "You Logged in with Github",
                    showConfirmButton: false,
                    timer: 1500
                })
                    .then(() => {
                        navigate('/');
                    })
            })
            .catch(err => {
                console.log("error", err.message);
            })
    }

    const handleLoginBtn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const newForm = { email, password }
        console.log(newForm);

        signIn(email, password)
            .then(result => {
                console.log(result.user);

                Swal.fire({
                    icon: "success",
                    title: "Welcome!",
                    showConfirmButton: false,
                    timer: 1500
                })
                    .then(() => {
                        navigate('/');
                    })
            })
            .catch(err => {
                console.log(err);

                Swal.fire({
                    icon: "error",
                    title: "No Such account has found",
                    showConfirmButton: false,
                    timer: 3500
                });
            })
    }


    return (
        <div>
            <h1 className="mt-24 text-6xl font-extrabold text-center">This is the Login Page</h1>

            <div className="mt-16 flex justify-center">
                <form action="" onSubmit={handleLoginBtn}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-4xl text-center font-semibold">Login</h2>
                            <hr className="mt-4" />
                            <div className="mt-8">
                                <h1 className="ml-2 font-bold">Email</h1>
                                <input type="text" placeholder="Email" name="email" className="mt-2 input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="mt-4">
                                <h1 className="ml-2 font-bold">Password</h1>
                                <input type="password" placeholder="Password" name="password" className="mt-2 input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="mt-4 flex items-center gap-2">
                                <h1 className="ml-2">Don't have an account?</h1>
                                <Link to="/register" className="link link-primary">Register</Link>
                            </div>
                            <div className="flex justify-center mt-4">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="mt-4 flex justify-center items-center gap-2">
                <hr className="w-44 border-2 border-black" />
                <p className="text-lg">or</p>
                <hr className="w-44 border-2 border-black" />
            </div>

            <div className="mt-4 flex justify-center gap-4">
                <button className="btn bg-black text-white hover:bg-blue-600" onClick={handleGoogleSignIn}><FaGoogle /> Sign With Google</button>
                <button className="btn bg-black text-white hover:bg-white hover:text-black" onClick={handleGithubSignIn}><FaGithub /> Sign With Github</button>
            </div>
        </div>
    )
}

export default Login

