import { Link } from "react-router-dom"

function sortSpotsByCostDescending(spots) {
    return spots.slice().sort((a, b) => b.cost - a.cost);
}

const AllSpotsCard = ({ spot }) => {

    return (
        <div>
            <div className="card w-[26rem] h-[50rem] bg-base-100 shadow-xl">
                <figure><img className="h-[280px]" src={spot.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h1 className="text-3xl font-extrabold">{spot.spot}</h1>
                    <h1 className="text-xl font-bold">{spot.country}</h1>
                    <p className="text-lg font-semibold">Location: {spot.location}</p>
                    <div className="flex justify-start gap-2">
                        <p className="font-semibold">Average Cost: <span className="badge badge-outline bg-rose-500 p-4 text-white">{spot.cost} $</span></p>
                        <p className="font-semibold">Visitors: <span className="badge badge-outline bg-rose-500 p-4 text-white">{spot.visitor} per/year</span></p>
                    </div>
                    <div className="flex justify-start gap-4">
                        <p className="font-semibold">Season: <span className="badge badge-outline bg-rose-500 p-4 text-white">{spot.season}</span></p>
                        <p className="font-semibold">Travel Time: <span className="badge badge-outline bg-rose-500 p-4 text-white">{spot.travel} days</span></p>
                    </div>
                    <div>
                        <p>{spot.description}</p>
                    </div>
                    <div className="flex justify-between items-center pt-5">
                        <Link to={`/spotdetails/${spot._id}`}>
                            <button className="btn btn-primary text-white">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AllSpotsCard