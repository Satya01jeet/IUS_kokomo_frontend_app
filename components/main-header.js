import Image from "next/image";
import PropTypes from "prop-types";

const MainHeader = ({ className = "" }) => {
  return (
    <header
      className={`absolute top-[0px] left-[0px] w-[1440px] flex flex-col items-start justify-start ${className}`}
    >
      <div className="w-[1440px] relative shadow-[0px_0px_5px_rgba(0,_0,_0,_0.5)] bg-white h-[84.6px]">
        <Image
          className="absolute top-[10px] left-[90px] w-[146px] h-[64.6px] object-cover"
          width={146}
          height={65}
          alt=""
          src="/link@2x.png"
        />
        <nav className="m-0 absolute top-[5px] left-[464px] w-[512px] h-[74px] text-left text-base text-midnightblue font-nunito">
          <a className="[text-decoration:none] absolute top-[0px] left-[0px] w-[44.3px] h-[74px] text-royalblue">
            <b className="absolute top-[25px] left-[0px] leading-[24px]">
              Home
            </b>
          </a>
          <a className="[text-decoration:none] absolute top-[0px] left-[79.3px] w-[140.1px] h-[74px] text-[inherit]">
            <b className="absolute top-[25px] left-[0px] leading-[24px]">
              From the Founders
            </b>
          </a>
          <a className="[text-decoration:none] absolute top-[0px] left-[254.4px] w-[38.1px] h-[74px] text-[inherit]">
            <b className="absolute top-[25px] left-[0px] leading-[24px]">
              Fleet
            </b>
          </a>
          <a className="[text-decoration:none] absolute top-[0px] left-[327.5px] w-[91.9px] h-[74px] text-[inherit]">
            <b className="absolute top-[25px] left-[0px] leading-[24px]">
              Membership
            </b>
          </a>
          <a className="[text-decoration:none] absolute top-[0px] left-[454.4px] w-[57.5px] h-[74px] text-[inherit]">
            <b className="absolute top-[26px] left-[0px] leading-[24px] flex items-center w-[57.9px] h-[22px]">
              Contact
            </b>
          </a>
        </nav>
        <button className="cursor-pointer [border:none] p-0 bg-midnightblue absolute top-[18px] left-[1171px] rounded-11xl w-[185.6px] h-12">
          <b className="absolute top-[12px] left-[41px] text-base leading-[24px] font-nunito text-white text-center">
            Come Aboard
          </b>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[calc(50%_-_24.3px)] left-[1376.6px] w-10 h-12 bg-[url('/user@2x.png')] bg-cover bg-no-repeat bg-[top]" />
      </div>
    </header>
  );
};

MainHeader.propTypes = {
  className: PropTypes.string,
};

export default MainHeader;
