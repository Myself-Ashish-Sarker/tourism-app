import React, { useState } from "react";

import Banner from "../Banner/Banner"
import ExtraOne from "../ExtraOne/ExtraOne"
import ExtraTwo from "../ExtraTwo/ExtraTwo"
import HomeCards from "../HomeCards/HomeCards"
import TextArea from "../TextArea/TextArea"

const Home = () => {


    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!darkMode);
    };



    return (
        <>
            <div className="mt-5 flex justify-center items-cente">
                <button className="btn bg-black text-white" onClick={toggleMode}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
            <div className={darkMode ? "bg-black" : "bg-white"}>
                <div className="pb-28">
                    <Banner></Banner>
                </div>
                <TextArea></TextArea>
                <HomeCards></HomeCards>
                <div className="mt-40">
                    <ExtraOne></ExtraOne>
                </div>
                <div className="mt-40">
                    <ExtraTwo></ExtraTwo>
                </div>
            </div>
        </>
    )
}

export default Home