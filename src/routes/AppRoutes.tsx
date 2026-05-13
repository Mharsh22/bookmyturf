import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import TurfDetails from "../pages/TurfDetails";
import Bookings from "../pages/Bookings";
import MainLayout from "../layouts/MainLayout";
import MyBookings from "../pages/MyBookings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/turf-details/:id" element={<TurfDetails />} />
        <Route path="/booking/:id" element={<Bookings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;