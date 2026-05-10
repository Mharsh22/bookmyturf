import { Link } from "react-router-dom";
type TurfCardProps = {
  id: number;  
  name: string;
  price: string;
};
const TurfCard = ({id, name,price}: TurfCardProps) => {
    return (
        <div className="border rounded-2xl p-4 shadow-sm space-y-1">
            <div className="h-48 bg-gray-200 rounded-xl"></div>
            <p className="text-xl font-semibold">{name}</p>
            <p className="text-gray-600">{price}</p>
            <Link to={`/turf-details/${id}`} className="bg-black text-white px-4 py-2 rounded-lg w-full hover:bg-gray-800 transition">Book Now</Link>
        </div>
    )
}

export default TurfCard