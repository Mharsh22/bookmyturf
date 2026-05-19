import { useEffect, useState } from "react";
import TurfCard from "../components/TurfCard";
import { getTurfs } from "../api";

const Home = () => {
  const [grounds, setGrounds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTurfs().then((data) => {
      setGrounds(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold leading-tight">
            Book Premium Turfs Online
          </h1>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Easy and quick turf booking for cricket, football and box cricket arenas near you.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-wider">Available Grounds</p>
            <h2 className="text-4xl font-bold mt-2">Our Grounds</h2>
          </div>
        </div>

        {loading ? (
          <p className="mt-12 text-gray-500">Loading turfs...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {grounds.map((ground: any) => (
              <TurfCard key={ground._id} {...ground} id={ground._id} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;