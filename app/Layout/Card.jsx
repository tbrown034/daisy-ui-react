export default function Card() {
  return (
    <div className="w-full card bg-neutral text-neutral-content">
      <div className="items-center text-center card-body">
        <h2 className="card-title">Hear From Our Patients</h2>
        <p>
          Don't just take our word. See what people are saying about Dr. Brown!
        </p>
        <p>
          "Quote We dfasdfjkalsdevelopers. Innovators and problem solvers. Small
          enough to be simple and quick, but big enough to deliver the
          scopsdfsdf need. Small enough to be simple and quick, but big enough
          to deliver the scope you want at the pace you need."
        </p>
        <p>- Ben Frank</p>
        <p>Auroura</p>
        <div className="justify-end card-actions">
          <div className="rating rating-lg rating-half">
            <input type="radio" name="rating-10" className="rating-hidden" />
            <input
              type="radio"
              name="rating-10"
              className="bg-green-500 mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              className="bg-green-500 mask mask-star-2 mask-half-2"
            />
            <input
              type="radio"
              name="rating-10"
              className="bg-green-500 mask mask-star-2 mask-half-1"
              checked
            />
            <input
              type="radio"
              name="rating-10"
              className="bg-green-500 mask mask-star-2 mask-half-2"
            />
            <input
              type="radio"
              name="rating-10"
              className="bg-green-500 mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              className="bg-green-500 mask mask-star-2 mask-half-2"
            />
            <input
              type="radio"
              name="rating-10"
              className="bg-green-500 mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              className="bg-green-500 mask mask-star-2 mask-half-2"
            />
            <input
              type="radio"
              name="rating-10"
              className="bg-green-500 mask mask-star-2 mask-half-1"
            />
            <input
              type="radio"
              name="rating-10"
              className="bg-green-500 mask mask-star-2 mask-half-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
