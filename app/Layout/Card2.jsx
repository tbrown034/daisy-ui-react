import Image from "next/image";
import pup2 from "../../public/Images/indyPup20.jpeg";

export default function Card() {
  return (
    <div className="shadow-xl card lg:card-side bg-base-100">
      <figure>
        <Image src={pup2} alt="City Image" layout="responsive" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
}
