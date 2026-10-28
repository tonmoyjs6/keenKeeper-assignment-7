import React from "react";

const Banner = () => {
  return (
    <div className="card max-w-[1200px] mx-auto">
      <div className="card-body">
        <h2 className="text-center font-bold text-5xl">Friends to keep close in your life</h2>
        <p className="text-center text-xl ">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div className="mx-auto">
            
        <button className="btn btn-primary bg-[#244D3F] text-[16px]">+Add a Friend</button>
        </div>

      </div>
    </div>
  );
};

export default Banner;
