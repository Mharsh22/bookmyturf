import { Link } from "react-router-dom";

type TurfCardProps = {
  id: number;
  name: string;
  price: string;
  location: string;
};

const TurfCard = ({
  id,
  name,
  price,
  location,
}: TurfCardProps) => {
  return (
    <div className="border border-gray-200 rounded-3xl p-4 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      
      <div className="h-52 bg-gray-200 rounded-2xl"></div>

      <div className="mt-4 space-y-2">
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            {name}
          </h2>

          <span className="text-sm font-medium bg-gradient-to-r from-emerald-600 to-green-700 text-white px-3 py-1 rounded-full">
            Turf
          </span>
        </div>

        <p className="text-gray-500 text-sm">
          📍 {location}
        </p>

        <p className="text-lg font-semibold text-gray-900">
          ₹{price}
          <span className="text-sm text-gray-500 font-normal">
            {" "}
            / hour
          </span>
        </p>

        <Link
          to={`/turf-details/${id}`}
          className="block w-full text-center bg-gradient-to-r from-emerald-600 to-green-700 text-white py-3 rounded-xl hover:bg-gray-800 transition mt-4"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default TurfCard;