import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const UpdateSpots = () => {

    const spots = useLoaderData();
    const { image, spot, country, location, description, cost, season, travel, visitor } = spots;

    const navigate  = useNavigate();

    const handleUpdate = e => {
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

        const newUpdate = { image, spot, country, location, description, cost, season, travel, visitor }

        console.log(newUpdate);

        fetch(`https://tourism-app-gray.vercel.app//spots/${spots._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    console.log(data.modifiedCount);
                    Swal.fire({
                        title: 'Success',
                        text: 'Spot Updated Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                    // reset the entire form
                    navigate('/mylist');
                }
            })
            .catch(err => console.log(err))
    }




    return (
        <div>
            <h1 className="mt-20 text-center text-4xl font-extrabold">You can Update your infos here</h1>

            <h1 className="mt-16 text-center text-xl font-semibold">Update Spot: {spot}</h1>
            <div className="flex justify-center">
                <div className="card mt-20 w-[40rem] bg-base-100 shadow-xl">
                    <div>
                        <form action="" onSubmit={handleUpdate}>
                            <div className="flex justify-center gap-8 pb-8">
                                <div>
                                    <h1>Image Link:</h1>
                                    <input type="text" defaultValue={image} placeholder="Image" name="image" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <h1>Spot Name:</h1>
                                    <input type="text" defaultValue={spot} placeholder="Spot Name" name="spot" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div className="flex justify-center gap-8 pb-8">
                                <div>
                                    <h1>Country Name:</h1>
                                    <input type="text" defaultValue={country} placeholder="Country Name" name="country" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <h1>Location:</h1>
                                    <input type="text" defaultValue={location} placeholder="Location" name="location" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div className="flex justify-center gap-8 pb-8">
                                <div>
                                    <h1>Short Description:</h1>
                                    <input type="text" defaultValue={description} placeholder="Short Description" name="description" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <h1>Average Cost:</h1>
                                    <input type="text" defaultValue={cost} placeholder="Average Cost" name="cost" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div className="flex justify-center gap-8 pb-8">
                                <div>
                                    <h1>Sesonality:</h1>
                                    <input type="text" defaultValue={season} placeholder="Sesonality Name" name="season" className="input input-bordered w-full max-w-xs" />
                                </div>
                                <div>
                                    <h1>Travel (Allwoed / Not Allowed):</h1>
                                    <input type="text" defaultValue={travel} placeholder="Travel" name="travel" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>
                            <div className="flex justify-center gap-8 pb-8">
                                <div>
                                    <h1>Total Visitor per Year:</h1>
                                    <input type="text" defaultValue={visitor} placeholder="Total Visitor per Year" name="visitor" className="input input-bordered w-full max-w-xs" />
                                </div>
                            </div>

                            <div className="flex justify-center mt-16 mb-4">
                                <input type="submit" className="btn btn-accent btn-neutral" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default UpdateSpots