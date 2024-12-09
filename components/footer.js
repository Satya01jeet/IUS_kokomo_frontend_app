import Image from "next/image";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[317.1px] left-[0px] bg-darkslateblue-100 border-gray-500 border-t-[1px] border-solid box-border w-[1440px] h-[97px] text-left text-smi text-white font-dm-sans ${className}`}
    >
      <div className="absolute top-[39.3px] left-[80px] leading-[19.5px] flex items-center w-[108.5px] h-[19.5px]">
        Copyright © 2024
      </div>
      <div className="absolute top-[40.3px] left-[616px] w-[173.2px] h-[17px]">
        <div className="absolute top-[0px] left-[0px] leading-[19.5px] flex items-center w-[173.5px] h-[17px]">
          Powered by IUS Digital Solutions
        </div>
      </div>
      <a className="[text-decoration:none] absolute top-[33px] left-[1217px] rounded-2xl bg-gray-500 w-8 h-8">
        <Image
          className="absolute top-[8px] left-[8px] w-4 h-4"
          width={16}
          height={16}
          alt=""
          src="/svg.svg"
        />
      </a>
      <a className="[text-decoration:none] absolute top-[33px] left-[1254px] rounded-2xl bg-gray-500 w-8 h-8">
        <Image
          className="absolute top-[8px] left-[8px] w-4 h-4"
          width={16}
          height={16}
          alt=""
          src="/svg1.svg"
        />
      </a>
      <a className="[text-decoration:none] absolute top-[33px] left-[1291px] rounded-2xl bg-gray-500 w-8 h-8">
        <Image
          className="absolute top-[8px] left-[8px] w-4 h-4"
          width={16}
          height={16}
          alt=""
          src="/svg2.svg"
        />
      </a>
      <a className="[text-decoration:none] absolute top-[33px] left-[1328px] rounded-2xl bg-gray-500 w-8 h-8">
        <Image
          className="absolute top-[8px] left-[8px] w-4 h-4"
          width={16}
          height={16}
          alt=""
          src="/svg3.svg"
        />
      </a>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
