import React from "react";
import about1 from "../assets/about1.svg";

const SingleProject = () => {

    const bg = {
        backgroundImage: `url(${about1})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '10px',
        height: '400px', // Adjust height as needed
        width: '100%', // Adjust width as needed
      };

    return(
        <div className="mx-auto px-4 mt-[20px] flex flex-col md:px-[2.5rem] justify-center items-center">
            <h1 className="font-semibold text-[30px] font-poppins">Autism Awareness Campaign</h1>
            <div style={bg}>
                <p className="text-white">date</p>
            </div>
        </div>
    )
};

export default SingleProject