// import bannerOne from "../../assets/images/banner-one.png";
import bannerOne from "../../assets/images/banner-1.png";
import bannerTwo from "../../assets/images/banner-2.png";
import bannerThree from "../../assets/images/banner-3.png";

const Banner = () => {
    return (
        <div className="mt-20">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={bannerOne} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <h1 className="text-5xl font-extrabold">WELCOME</h1>
                            <h1 className="text-5xl font-extrabold">Join the Flow</h1>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>

                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={bannerTwo} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <h1 className="text-5xl font-extrabold">WELCOME</h1>
                            <h1 className="text-5xl font-extrabold">Join the Flow</h1>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={bannerThree} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <h1 className="text-5xl font-extrabold">WELCOME</h1>
                            <h1 className="text-5xl font-extrabold">Join the Flow</h1>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner