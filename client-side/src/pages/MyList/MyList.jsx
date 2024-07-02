import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

const MyList = () => {
    const loadedData = useLoaderData()
    const [spots, setSpots] = useState(loadedData);



const handleDelete = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                const response = await fetch(`https://tourism-app-gray.vercel.app//spots/${id}`, {
                    method: 'DELETE'
                });
                const data = await response.json();
                if (data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                    // Remove the spot from the UI
                    const remainingSpots = spots.filter(spot => spot._id !== id);
                    setSpots(remainingSpots);
                } else {
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete spot.",
                        icon: "error"
                    });
                }
            } catch (error) {
                console.error('Error deleting spot:', error);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to delete spot.",
                    icon: "error"
                });
            }
        }
    });
};



    useEffect(() => {
        fetchSpots();
    }, []);

    const fetchSpots = async () => {
        try {
            const response = await fetch('https://tourism-app-gray.vercel.app/spots');
            if (response.ok) {
                const data = await response.json();
                setSpots(data)
            } else {
                console.error("Failed to fetch spots", response.statusText)
            }
        } catch (error) {
            console.error('Error fetching spots: ', error)
        }
    }




    return (
        <div>


            <div className="overflow-x-auto">
                <table className="table p-4">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Spot</th>
                            <th>Country</th>
                            <th>Loction</th>
                            <th>Cost</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            spots.map((spot, index) => (
                                <tr key={index}>
                                    <td>{spot.spot}</td>
                                    <td>{spot.country}</td>
                                    <td>{spot.location}</td>
                                    <td>{spot.cost}</td>
                                    <td><Link to={`/updatespots/${ spot._id }`}><button className="btn bg-yellow-500 text-white">Update</button></Link></td>
                                    <td><button onClick={() => handleDelete(spot._id)} className="btn bg-red-500 text-white">Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyList
