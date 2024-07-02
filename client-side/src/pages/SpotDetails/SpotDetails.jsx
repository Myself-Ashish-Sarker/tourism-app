import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const SpotDetails = ({ }) => {

    const spots = useLoaderData();
    const { _id } = useParams();
    const spot = spots.find(spot => spot._id == _id)
    console.log(_id, spot);

    return (
        <div>
            <div className="mt-28 flex justify-center">
                <img className="rounded-md" src={spot.image} alt="" />
            </div>
            <div>
                <h1 className="mt-4 text-6xl text-center font-extrabold">{spot.spot}</h1>
            </div>
            <div className="mt-8">
                <h1 className="mt-4 text-4xl text-center font-bold">Country: <span className="bg-black text-white rounded-md p-2">{spot.country}</span></h1>
            </div>
            <div className="mt-8">
                <h1 className="mt-4 text-4xl text-center font-bold">Location: <span className="bg-black text-white rounded-md p-2">{spot.location}</span></h1>
            </div>
            <div className="mt-16 w-[65rem] mx-auto">
                <span className="text-3xl font-semibold ">"{spot.description}"</span>
            </div>
            <div className="mt-24 flex justify-center">
                <div className="flex justify-start lg:gap-12 md:gap-8 gap-4">
                    <p className="font-semibold">Cost: <span className="badge badge-outline bg-rose-500 p-4 text-white">{spot.cost} $</span></p>
                    <p className="font-semibold">Visitors: <span className="badge badge-outline bg-rose-500 p-4 text-white">{spot.visitor} per/year</span></p>
                    <p className="font-semibold">season: <span className="badge badge-outline bg-rose-500 p-4 text-white">{spot.season}</span></p>
                <p className="font-semibold">Travel: <span className="badge badge-outline bg-rose-500 p-4 text-white">{spot.travel}</span></p>
                </div>
            </div>
            <div className="flex justify-center mt-36">
                <Link to="/allspots">
                    <button className="flex items-center gap-1 btn bg-black hover:bg-[#272626] text-white"><FaLongArrowAltLeft />Go Back</button>
                </Link>
            </div>
        </div>
    )
}

export default SpotDetails