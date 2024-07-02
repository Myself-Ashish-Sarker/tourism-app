import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';
import { FaCircle } from "react-icons/fa6";


const Register = () => {

    const navigate = useNavigate()

    const { createUser } = useContext(AuthContext)

    const handleRegisterBtn = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const passwordRegAuth = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegAuth.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Passoword didn't met criteria",
                showConfirmButton: false,
                timer: 3500
            });
            return;
        }


        const newForm = { image, name, email, password }
        console.log(newForm);

        createUser(email, password)
            .then(result => {
                console.log(result.user);

                // new user has been created
                const createdAt = result.suer?.metadata?.creationTime
                const user = { email, password, createdAt: createdAt };
                fetch('https://tourism-app-gray.vercel.app//user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                icon: "success",
                                title: "Successfully Registered",
                                showConfirmButton: false,
                                timer: 1500
                            })
                                .then(() => {
                                    navigate('/');
                                })
                        }
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1 className="mt-24 text-6xl font-extrabold text-center">This is the Register Page</h1>

            <div className="mt-16 flex justify-center">
                <form action="" onSubmit={handleRegisterBtn}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-4xl text-center font-semibold">Register</h2>
                            <hr className="mt-4" />
                            <div className="mt-8">
                                <h1 className="ml-2 font-bold">Image Link</h1>
                                <input type="password" placeholder="Image Link" name="image" className="mt-2 input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="mt-4">
                                <h1 className="ml-2 font-bold">Username</h1>
                                <input type="text" placeholder="Username" name="name" className="mt-2 input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="mt-4">
                                <h1 className="ml-2 font-bold">Email</h1>
                                <input type="text" placeholder="Email" name="email" className="mt-2 input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="mt-4">
                                <h1 className="ml-2 font-bold">Password</h1>
                                <input type="password" placeholder="Password" name="password" className="mt-2 input input-bordered w-full max-w-xs" />
                            </div>
                            <div>

                                <div className="card w-80 bg-rose-400 border-2 border-rose-700 shadow-2xl">
                                    <div className="card-body">
                                        <h1 className="text-lg font-bold">Criteria</h1>
                                        <div className="flex items-center gap-2">
                                            <FaCircle className="text-[0.5rem] text-white" />
                                            <p className="text-sm text-white font-bold">Must have an Uppercase letter</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaCircle className="text-[0.5rem] text-white" />
                                            <p className="text-sm text-white font-bold">Must have a Lowercase letter</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaCircle className="text-[0.5rem] text-white" />
                                            <p className="text-sm text-white font-bold">Length must be at least 6 character</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-4 flex items-center gap-2">
                                <h1 className="ml-2">Don't have an account?</h1>
                                <Link to="/login" className="link link-primary">Login</Link>
                            </div>
                            <div className="flex justify-center mt-4">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register