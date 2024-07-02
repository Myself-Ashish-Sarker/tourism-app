import { Link } from "react-router-dom";
import lost from "../../assets/images/lost.png";
import { FaLongArrowAltLeft } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center gap-4">
            <img className="w-96" src={lost} alt="" />
            <Link to="/">
                <button className="btn bg-[#131212] text-white text-xl"><FaLongArrowAltLeft /> Home</button>
            </Link>
        </div>
    )
}

export default ErrorPage