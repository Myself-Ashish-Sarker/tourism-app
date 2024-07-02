const ExtraTwo = () => {
    return (
        <div>
            <h1 className="text-5xl text-center font-extrabold">Some <span className="text-red-500">Selfies</span> of Visitors</h1>

            <div className="grid lg:grid-cols-4 md:grid-cols-4 mx-24 justify-items-center mt-16">
                <div className="card w-52 h-[25rem] shadow-xl image-full cursor-pointer transition delay-150 hover:scale-110 duration-300 ease-in-out">
                    <figure><img src="https://www.intrepidescape.com/wp-content/gallery/selfie-success/cache/Steps-to-selfie-success-1-1.jpg-nggid03858-ngg0dyn-0x0x100-00f0w010c010r110f110r010t010.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-52 h-[25rem] shadow-xl image-full cursor-pointer transition delay-150 hover:scale-110 duration-300 ease-in-out">
                    <figure><img src="https://media.istockphoto.com/id/1329031407/photo/young-man-with-backpack-taking-selfie-portrait-on-a-mountain-smiling-happy-guy-enjoying.jpg?s=612x612&w=0&k=20&c=WvjAEx3QlWoAn49drp0N1vmxAgGObxWDpoXtaU2iB4Q=" alt="Shoes" /></figure>
                </div>
                <div className="card w-52 h-[25rem] shadow-xl image-full cursor-pointer transition delay-150 hover:scale-110 duration-300 ease-in-out">
                    <figure><img src="https://www.shutterstock.com/image-photo/young-attractive-smiling-happy-man-600nw-1898456905.jpg" alt="Shoes" /></figure>
                </div>
                <div className="card w-52 h-[25rem] shadow-xl image-full cursor-pointer transition delay-150 hover:scale-110 duration-300 ease-in-out">
                    <figure><img src="https://www.shutterstock.com/image-photo/happy-woman-taking-selfie-friends-260nw-2302070705.jpg" alt="Shoes" /></figure>
                </div>
            </div>
        </div>
    )
}

export default ExtraTwo