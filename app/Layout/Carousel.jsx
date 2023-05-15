import Image from "next/image";
import pup1 from "/public/Images/indypup22.jpeg";
import pup2 from "/public/Images/indypup23.jpeg";
import pup3 from "/public/Images/indypup24.jpeg";
import pup4 from "/public/Images/indypup25.jpeg";
import Card from "./Card";

export default function Carousel() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-1/3 carousel h-min">
        <div id="slide1" className="relative w-full h-full carousel-item">
          <Card />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="relative w-full h-full carousel-item">
          <Image src={pup2} alt="City Image" layout="responsive" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
