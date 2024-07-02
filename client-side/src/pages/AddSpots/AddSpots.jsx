import Swal from 'sweetalert2';

const AddSpots = () => {

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const image = form.image.value;
        const spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const travel = form.travel.value;
        const visitor = form.visitor.value;
        const user = form.user.value;
        const password = form.password.value;

        const newSubmit = { image, spot, country, location, description, cost, season, travel, visitor, user, password }

        console.log(newSubmit);

        // send data to server
        fetch('https://tourism-app-gray.vercel.app/addspots', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newSubmit)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                    // reset the entire form
                    form.reset();
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <h1 className="text-6xl text-center mt-14">Add Destination</h1>

            <div className="flex justify-center">
                <div className="card mt-20 w-[40rem] bg-base-100 shadow-xl">
                    <div>
                        <form action="" onSubmit={handleSubmit}>
                            <div className="flex justify-center gap-8 pb-8">
                                <div>
                                    <h1>Image Link:</h1>
                                    <input type="text" placeholder="Image" name="image" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <h1>Spot Name:</h1>
                                    <input type="text" placeholder="Spot Name" name="spot" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div className="flex justify-center gap-8 pb-8">
                                <div>
                                    <h1>Country Name:</h1>
                                    <input type="text" placeholder="Country Name" name="country" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <h1>Location:</h1>
                                    <input type="text" placeholder="Location" name="location" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div className="flex justify-center gap-8 pb-8">
                                <div>
                                    <h1>Short Description:</h1>
                                    <input type="text" placeholder="Short Description" name="description" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <h1>Average Cost:</h1>
                                    <input type="text" placeholder="Average Cost" name="cost" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div className="flex justify-center gap-8 pb-8">
                                <div>
                                    <h1>Sesonality:</h1>
                                    <input type="text" placeholder="Sesonality Name" name="season" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <h1>Travel Time:</h1>
                                    <input type="text" placeholder="Travel" name="travel" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div className="flex justify-center gap-8 pb-8">
                                <div>
                                    <h1>Total Visitor per Year:</h1>
                                    <input type="text" placeholder="Total Visitor per Year" name="visitor" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <hr className="border-2 border-black w-[30rem] mx-auto mb-8" />
                            <div className="flex justify-center gap-8 pb-8">
                                <div>
                                    <h1>User Name:</h1>
                                    <input type="text" placeholder="User Name" name="user" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <h1>Password:</h1>
                                    <input type="password" placeholder="Password" name="password" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div className="flex justify-center mt-16 mb-4">
                                <input type="submit" className="btn btn-accent btn-neutral" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AddSpots