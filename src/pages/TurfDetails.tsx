import { Link, useParams } from "react-router-dom";
import { grounds } from "../data/grounds";


const TurfDetails = () => {
  const { id } = useParams();

  const selectedGround = grounds.find(
    (g) => g.id === Number(id)
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold">
        {selectedGround?.name}
      </h1>

      <p className="text-gray-600 mt-4">
        {selectedGround?.price}
      </p>

      <Link
  to={`/booking/${id}`}
  className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-lg"
>
  Book Now
</Link>
    </div>
  );
};

export default TurfDetails;