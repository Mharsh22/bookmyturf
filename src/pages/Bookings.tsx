import { useState } from "react";
import { useParams } from "react-router-dom";

const Bookings = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Complete Your Booking
      </h1>

      <form className="space-y-6">

        <div>
          <label htmlFor="name" className="block font-medium">
            Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border w-full px-4 py-3 rounded-lg mt-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border w-full px-4 py-3 rounded-lg mt-2"
          />
        </div>

        <div>
          <label htmlFor="date" className="block font-medium">
            Date
          </label>

          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border w-full px-4 py-3 rounded-lg mt-2"
          />
        </div>

        <div>
          <label htmlFor="time" className="block font-medium">
            Select Time Slot
          </label>

          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="border w-full px-4 py-3 rounded-lg mt-2"
          >
            <option value="">Choose Slot</option>
            <option value="6 AM - 7 AM">6 AM - 7 AM</option>
            <option value="7 AM - 8 AM">7 AM - 8 AM</option>
            <option value="8 AM - 9 AM">8 AM - 9 AM</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg w-full mt-6 hover:bg-gray-800 transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Bookings;