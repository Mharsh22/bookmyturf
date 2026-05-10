import { Link } from "react-router-dom"
const Navbar = () => {
    return(
        <nav className="flex items-center justify-between px-8 py-4 shadow-md">
            <div>
                <span className="text-2xl font-bold">BookmyTurf</span>
            </div>
            <div className="flex items-center gap-6">
                <Link to="/" className="text-gray-700 hover:text-black transition">Home</Link>
                <Link to="/turf-details" className="text-gray-700 hover:text-black transition">Turf Details</Link>
                <Link to="/booking/1" className="text-gray-700 hover:text-black transition">Bookings</Link>
                <Link to="/login" className="text-gray-700 hover:text-black transition">Login</Link>   
            </div>
        </nav>
    )
}
export default Navbar