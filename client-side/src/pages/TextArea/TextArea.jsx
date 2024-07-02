import { Typewriter } from 'react-simple-typewriter';
import { Fade } from "react-awesome-reveal";

const TextArea = () => {
    return (
        <div>
            <div className='text-8xl absolute transform translate-x-1/2 translate-y-1/2 right-1/2'>

                <h1 className='text-rose-600 lg:text-7xl md:text-4xl text-2xl font-extrabold'>
                    <Typewriter words={['Join the Flow', 'Feel the Glow']} delaySpeed={800} loop={false} />
                </h1>
            </div>

            <Fade delay={1e3} cascade damping={1e-1}>
                <div>
                    <p className='py-32 lg:w-[50rem] md:[35rem] w-[28rem] mx-auto text-center font-semibold text-xl'>
                        Discover endless possibilities at our website! Explore curated content, engage with vibrant communities, and unlock your potential. With intuitive navigation and rich features, your online journey begins here. Join us now and experience the excitement firsthand!
                    </p>
                </div>
            </Fade>
        </div>
    )
}

export default TextArea