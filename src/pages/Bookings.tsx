import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { grounds } from "../data/grounds";
import type { Booking } from "../types/booking";

const Bookings = () => {
  const { id } = useParams();

  const [bookingConfirmed, setBookingConfirmed] =
    useState(false);

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    phone: "",
  });

  const slots = [
    "6 AM - 7 AM",
    "7 AM - 8 AM",
    "8 AM - 9 AM",
    "9 AM - 10 AM",
  ];

  const bookedSlotsByDate: Record<string, string[]> = {
    "2026-05-15": ["6 AM - 7 AM"],
    "2026-05-16": ["8 AM - 9 AM"],
  };

  const bookedSlots =
    bookedSlotsByDate[formData.date] || [];

  const bookedGround = grounds.find(
    (ground) => ground.id === Number(id)
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {
      alert("Please enter the required details");
      return;
    }

    const bookingData = {
      ...formData,
      groundId: bookedGround?.id,
      groundName: bookedGround?.name,
      location: bookedGround?.location,
    };

    const existingBookings = JSON.parse(
      localStorage.getItem("bookings") || "[]"
    );

    const alreadyBooked = existingBookings.some(
      (booking: Booking) =>
        booking.groundId === bookedGround?.id &&
        booking.date === formData.date &&
        booking.time === formData.time
    );

    if (alreadyBooked) {
      alert("Slot already booked");
      return;
    }

    localStorage.setItem(
      "bookings",
      JSON.stringify([
        ...existingBookings,
        bookingData,
      ])
    );

    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      phone: "",
    });

    setBookingConfirmed(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {bookingConfirmed ? (
        <section className="min-h-[80vh] flex items-center justify-center px-6">
          <div className="bg-white border border-gray-200 rounded-3xl p-10 shadow-sm text-center max-w-xl w-full">
            
            <div className="w-20 h-20 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-4xl mx-auto">
              ✓
            </div>

            <h1 className="text-4xl font-bold mt-6">
              Booking Confirmed
            </h1>

            <p className="text-gray-500 mt-4">
              Your turf slot has been successfully booked.
            </p>

            <Link
              to="/mybookings"
              className="inline-block mt-8 bg-gradient-to-r from-emerald-600 to-green-700 text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition"
            >
              View My Bookings
            </Link>
          </div>
        </section>
      ) : (
        <>
          <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-20">
            <div className="max-w-7xl mx-auto px-6">
              
              <p className="uppercase tracking-widest text-sm text-gray-300">
                Turf Booking
              </p>

              <h1 className="text-5xl font-bold mt-4">
                Complete Your Booking
              </h1>

              <p className="text-gray-300 mt-4 text-lg">
                Secure your preferred turf slot in just a few steps.
              </p>
            </div>
          </section>

          <section className="max-w-5xl mx-auto px-6 py-14">
            
            <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8">
              
              <div className="flex items-center gap-4 mb-10">
                
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step === 1
                      ? "bg-gradient-to-r from-emerald-600 to-green-700 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  1
                </div>

                <div className="h-[2px] flex-1 bg-gray-200"></div>

                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step === 2
                      ? "bg-gradient-to-r from-emerald-600 to-green-700 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  2
                </div>
              </div>

              <form
                className="space-y-8"
                onSubmit={handleSubmit}
              >
                {step === 1 && (
                  <div>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 mb-10">
                      
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900">
                            {bookedGround?.name}
                          </h2>

                          <p className="text-gray-500 mt-3">
                            📍 {bookedGround?.location}
                          </p>
                        </div>

                        <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white rounded-2xl px-6 py-4">
                          <p className="text-sm text-gray-300">
                            Price
                          </p>

                          <h3 className="text-2xl font-bold mt-1">
                            ₹{bookedGround?.price}

                            <span className="text-sm font-normal text-gray-300">
                              {" "}
                              / hour
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="date"
                        className="block text-lg font-semibold text-gray-900"
                      >
                        Select Date
                      </label>

                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            date: e.target.value,
                            time: "",
                          })
                        }
                        className="border border-gray-300 w-full px-4 py-4 rounded-2xl mt-3 outline-none focus:border-black"
                      />
                    </div>

                    <div className="mt-8">
                      <label className="block text-lg font-semibold text-gray-900 mb-4">
                        Select Time Slot
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {slots.map((slot) => {
                          const isBooked =
                            bookedSlots.includes(slot);

                          return (
                            <button
                              type="button"
                              key={slot}
                              disabled={isBooked}
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  time: slot,
                                })
                              }
                              className={`border rounded-2xl px-5 py-4 text-left transition-all duration-300 ${
                                isBooked
                                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                  : formData.time === slot
                                  ? "bg-gradient-to-r from-emerald-600 to-green-700 text-white border-black"
                                  : "bg-white hover:border-black"
                              }`}
                            >
                              <p className="font-semibold">
                                {slot}
                              </p>

                              <p className="text-sm mt-1">
                                {isBooked
                                  ? "Already Booked"
                                  : "Available"}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (
                          !formData.date ||
                          !formData.time
                        ) {
                          alert(
                            "Please select date and slot"
                          );
                          return;
                        }

                        setStep(2);
                      }}
                      className="w-full bg-gradient-to-r from-emerald-600 to-green-700 text-white py-4 rounded-2xl mt-10 hover:bg-gray-800 transition text-lg font-medium"
                    >
                      Continue
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    
                    <div>
                      <label className="block text-lg font-semibold text-gray-900">
                        Full Name
                      </label>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="border border-gray-300 w-full px-4 py-4 rounded-2xl mt-3 outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-gray-900">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="border border-gray-300 w-full px-4 py-4 rounded-2xl mt-3 outline-none focus:border-black"
                      />
                    </div>

                    <div>
                      <label className="block text-lg font-semibold text-gray-900">
                        Email Address
                      </label>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="border border-gray-300 w-full px-4 py-4 rounded-2xl mt-3 outline-none focus:border-black"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-600 to-green-700 text-white py-4 rounded-2xl hover:bg-gray-800 transition text-lg font-medium mt-8"
                    >
                      Confirm Booking
                    </button>
                  </div>
                )}
              </form>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Bookings;