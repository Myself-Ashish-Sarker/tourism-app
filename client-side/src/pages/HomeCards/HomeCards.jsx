import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";;

const HomeCards = () => {

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        fetch('https://tourism-app-gray.vercel.app//addspots')
            .then(res => res.json())
            .then(data => {
                setSpots(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <div>
                <h1 className="text-6xl font-extrabold text-black text-center">Ready to Visit the Best places in Europe ?!</h1>
            </div>
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center px-4 gap-y-12">
                {
                    spots.slice(0, 6).map(spot => (
                        <div key={spot._id} >
                            <div >
                                <div className="card w-[26rem] h-[40rem] bg-base-100 shadow-xl">
                                    <figure><img className="h-[280px]" src={spot.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h1 className="text-3xl font-extrabold">{spot.spot}</h1>
                                        <h1 className="text-xl font-bold">{spot.country}</h1>
                                        <p className="text-lg font-semibold">Location: {spot.location}</p>
                                        <div className="flex justify-start gap-4">
                                            <p className="font-semibold">Cost: <span className="badge badge-outline bg-rose-500 p-4 text-white">{spot.cost} $</span></p>
                                            <p className="font-semibold">Visitors: <span className="badge badge-outline bg-rose-500 p-4 text-white">{spot.visitor} per/year</span></p>
                                        </div>
                                        <div className="flex justify-start gap-4">
                                            <p className="font-semibold">season: <span className="badge badge-outline bg-rose-500 p-4 text-white">{spot.season}</span></p>
                                            <p className="font-semibold">Travel: <span className="badge badge-outline bg-rose-500 p-4 text-white">{spot.travel}</span></p>
                                        </div>
                                        <div>
                                            <p>{spot.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <h1 className="text-center text-rose-500 mt-16 text-3xl font-semibold">For more Spots and their details</h1>
                <Link to="/allspots" className="flex justify-center mt-4">
                    <button className="btn bg-black text-white hover:bg-white hover:text-black font-semibold">Visit this page<FaLongArrowAltRight /></button>
                </Link>
            </div>
        </>
    )
}

export default HomeCards