import React from "react";

import footerLogo from "../../assets/logo-xl.png"

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-base-content rounded p-10 w-[1500px] h-[300px] mt-5">
       <img src={footerLogo} alt="" srcset="" />
     
       
      
      
        <p className="text-white">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
     
    </footer>
  );
};

export default Footer;
