import { Link, useParams } from "react-router-dom";
import { grounds } from "../data/grounds";

const TurfDetails = () => {
  const { id } = useParams();

  const selectedGround = grounds.find(
    (g) => g.id === Number(id)
  );

  if (!selectedGround) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-900">
          Ground not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <p className="uppercase tracking-widest text-sm text-gray-300">
            Turf Details
          </p>

          <h1 className="text-5xl font-bold mt-4">
            {selectedGround.name}
          </h1>

          <p className="text-gray-300 mt-4 text-lg">
            Premium sports turf with easy online slot booking.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          <div className="h-[450px] bg-gray-200 rounded-3xl"></div>

          <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
            
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedGround.name}
              </h2>

              <span className="bg-gradient-to-r from-emerald-600 to-green-700 text-white px-4 py-2 rounded-full text-sm">
                Available
              </span>
            </div>

            <p className="text-gray-500 mt-4 text-lg">
              📍 {selectedGround.location}
            </p>

            <div className="mt-8">
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                Price
              </p>

              <h3 className="text-4xl font-bold text-gray-900 mt-2">
                ₹{selectedGround.price}

                <span className="text-lg text-gray-500 font-normal">
                  {" "}
                  / hour
                </span>
              </h3>
            </div>

            <div className="mt-10 space-y-4">
              
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>

                <p className="text-gray-700">
                  Instant slot confirmation
                </p>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>

                <p className="text-gray-700">
                  Premium night lighting available
                </p>
              </div>

              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>

                <p className="text-gray-700">
                  Easy online booking experience
                </p>
              </div>
            </div>

            <Link
              to={`/booking/${id}`}
              className="block text-center mt-10 bg-gradient-to-r from-emerald-600 to-green-700 text-white py-4 rounded-2xl text-lg font-medium hover:bg-gray-800 transition"
            >
              Book This Turf
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TurfDetails;