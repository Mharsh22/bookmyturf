import { useEffect, useState } from "react";
import type { Booking } from "../types/booking";

const MyBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const existingBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );

    setBookings(existingBookings);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase tracking-widest text-sm text-gray-300">
            Booking Dashboard
          </p>

          <h1 className="text-5xl font-bold mt-4">
            My Bookings
          </h1>

          <p className="text-gray-300 mt-4 max-w-2xl text-lg">
            Manage and view all your upcoming turf bookings in one place.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-14">
        {bookings.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-3xl p-10 text-center shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">
              No bookings yet
            </h2>

            <p className="text-gray-500 mt-3">
              Your upcoming turf bookings will appear here.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {bookings.map((booking, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  
                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-gray-900">
                        {booking.groundName}
                      </h2>

                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        Confirmed
                      </span>
                    </div>

                    <p className="text-gray-500 mt-2">
                      📍 {booking.location}
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-2xl px-5 py-3">
                    <p className="text-sm text-gray-500">
                      Booking Slot
                    </p>

                    <p className="font-semibold text-gray-900 mt-1">
                      {booking.time}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  
                  <div className="bg-gray-50 rounded-2xl p-4">
                    <p className="text-sm text-gray-500">
                      Date
                    </p>

                    <p className="font-semibold text-gray-900 mt-1">
                      {booking.date}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <p className="text-sm text-gray-500">
                      Booked By
                    </p>

                    <p className="font-semibold text-gray-900 mt-1">
                      {booking.name}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <p className="text-sm text-gray-500">
                      Phone Number
                    </p>

                    <p className="font-semibold text-gray-900 mt-1">
                      {booking.phone}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-2xl p-4">
                    <p className="text-sm text-gray-500">
                      Email Address
                    </p>

                    <p className="font-semibold text-gray-900 mt-1 break-all">
                      {booking.email}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MyBookings;