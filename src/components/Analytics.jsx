import React from "react";
import Laptop from "../assets/laptop.jpg"



const Analytics  = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 " src={Laptop} alt="/" />
        <div className="flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD </p>
          <h1 className="font-bold text-3xl">Manage Data Analytics Centrally </h1>
          <p className="text-[12px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae necessitatibus doloribus officiis sit, ut 
            similique? Dolore aliquam consequatur tempora aperiam quas. Dignissimos mollitia error dolores. Eum eligendi 
            atque voluptatum quae?
          </p>

          <button className=" bg-[black] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] hover:bg-[#0f5740] hover:text-white"> Get Started </button>

        </div>
      </div>

    </div>
  );
}

export default Analytics;