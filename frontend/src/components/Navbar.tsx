import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold">
            B
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              BookMyTurf
            </h1>

            <p className="text-xs text-gray-500 -mt-1">
              Online Turf Booking
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm md:text-base font-medium transition ${
                isActive
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/mybookings"
            className={({ isActive }) =>
              `text-sm md:text-base font-medium transition ${
                isActive
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              }`
            }
          >
            My Bookings
          </NavLink>

          <Link
            to="/login"
            className="bg-gradient-to-r from-emerald-600 to-green-700 text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition text-sm md:text-base"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;