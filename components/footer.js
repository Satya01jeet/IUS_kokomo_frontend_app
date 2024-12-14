import Image from "next/image";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between w-full mx-auto px-8 py-6 bg-darkslateblue-100 gap-4 border-t border-gray-500 text-white font-dm-sans ${className}`}
    >
      <div className="text-smi">
        Copyright © 2024
      </div>
      <div className="text-smi">
        Powered by IUS Digital Solutions
      </div>
      <div className="flex items-center space-x-3">
        <a className="rounded-2xl bg-gray-500 w-8 h-8 flex items-center justify-center">
          <Image
            className="w-4 h-4"
            width={16}
            height={16}
            alt=""
            src="/svg.svg"
          />
        </a>
        <a className="rounded-2xl bg-gray-500 w-8 h-8 flex items-center justify-center">
          <Image
            className="w-4 h-4"
            width={16}
            height={16}
            alt=""
            src="/svg1.svg"
          />
        </a>
        <a className="rounded-2xl bg-gray-500 w-8 h-8 flex items-center justify-center">
          <Image
            className="w-4 h-4"
            width={16}
            height={16}
            alt=""
            src="/svg2.svg"
          />
        </a>
        <a className="rounded-2xl bg-gray-500 w-8 h-8 flex items-center justify-center">
          <Image
            className="w-4 h-4"
            width={16}
            height={16}
            alt=""
            src="/svg3.svg"
          />
        </a>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;