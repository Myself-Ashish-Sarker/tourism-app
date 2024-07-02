import { Link, useLoaderData } from "react-router-dom"
import AllSpotsCard from "../AllSpotsCard/AllSpotsCard";
import { FaLongArrowAltLeft } from "react-icons/fa";


const AllSpots = () => {

    const spots = useLoaderData();

    return (
        <div className="mt-20">
            <h1 className="text bg-black p-4 rounded-md text-4xl text-white text-center w-[28rem] mx-auto">Total Added Spots are: {spots.length}</h1>

            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center px-4 gap-y-12">
                {
                    spots.map(spot => <AllSpotsCard
                        key={spot._id}
                        spot={spot}
                    ></AllSpotsCard>)
                }
            </div>


            <div className="mt-28 flex justify-center">
                <Link to="/">
                    <button className="btn bg-[#121111] hover:bg-[#1e1c1c] text-white"><FaLongArrowAltLeft></FaLongArrowAltLeft>Go back to Home Page</button>
                </Link>
            </div>
        </div>
    )
}

export default AllSpots