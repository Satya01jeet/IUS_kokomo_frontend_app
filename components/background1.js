import { div } from "framer-motion/client";
import Image from "next/image";
import PropTypes from "prop-types";

const Background1 = ({ className = "" }) => {
  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-10 my-8 lg:my-16">
      {/* links section */}
      <div className="flex flex-col md:flex-row gap-8 text-gray-600">
        <div>
          <p className="text-midnightblue ">Fleet</p>
          <ul>
            <li>
              <a href="#" className="cursor-pointer hover:text-midnightblue">
                50' Memory Maker
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer hover:text-midnightblue">
                50' Club Yacht
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer hover:text-midnightblue">
                43' Giddy Up
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer hover:text-midnightblue">
                42' Wanderlust
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer hover:text-midnightblue">
                38' Top Shelf
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-midnightblue ">Helpful Links</p>
          <ul>
            <li>
              <a href="#" className="cursor-pointer hover:text-midnightblue">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer hover:text-midnightblue">
                From the Founders
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer hover:text-midnightblue">
                Fleet
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer hover:text-midnightblue">
                Membership
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer hover:text-midnightblue">
                Membership Brochure
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer hover:text-midnightblue">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-midnightblue">Contact</p>
          <ul>
            <li>
              <a
                href="tel:+194125YACHT"
                className="cursor-pointer hover:text-midnightblue"
              >
                (941) 25-YACHT
              </a>
            </li>
            <li>
              <a
                href="tel:+19412592248"
                className="cursor-pointer hover:text-midnightblue"
              >
                (941) 259-2248
              </a>
            </li>
            <li>
              <a
                href="mailto:Info@KokomoYachtClub.vip"
                className="cursor-pointer hover:text-midnightblue"
              >
                Info@KokomoYachtClub.vip
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=1000 Boulevard of the Arts, Sarasota, FL"
                target="_blank"
                className="cursor-pointer hover:text-midnightblue"
              >
                1000 Boulevard of the Arts, Sarasota, FL
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* logo section */}
      <div className="flex flex-col items-center gap-4 lg:items-start lg:w-1/2">
        <Image
          className="w-[249px] h-[110.1px] object-cover"
          width={249}
          height={110}
          alt=""
          src="/color3dfull20colorpng@2x.png"
        />
        <p className="text-center text-gray-600">
          SWFL's luxury boat club providing the pure joy of boating without the
          hassles.
        </p>
      </div>
    </div>
  );
};

Background1.propTypes = {
  className: PropTypes.string,
};

export default Background1;
