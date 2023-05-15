import pup1 from "../../public/Images/indyPup21.jpeg";
import Image from "next/image";

export default function Flow() {
  return (
    <>
      <section className="p-5 bg-white dark:bg-gray-900">
        <div className="items-center max-w-screen-xl gap-16 px-4 mx-auto ">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              We didn't reinvent the wheel
            </h2>
            <p className="mb-4">
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick, but big
              enough to deliver the scope you want at the pace you need. Small
              enough to be simple and quick, but big enough to deliver the scope
              you want at the pace you need.
            </p>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image src={pup1} alt="City Image" layout="responsive" />

            <Image src={pup1} alt="City Image" layout="responsive" />
          </div>
        </div>
      </section>
    </>
  );
}
