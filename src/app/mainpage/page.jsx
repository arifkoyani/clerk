"use client";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./dashboard/page";
// import Login from "./login/[[...login]]/page";
// import Signup from "./signup/[[...signup]]//page";

export default function Mainpage() {
  return (
    <>
      {/* <Router>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="register" element={<div>Register Page</div>} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  </Router> */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 bg-gray-100 rounded-lg shadow-md">
        <>
          {/* <Link href="/login">
          <button className="w-full sm:w-auto px-6 py-2 text-sm font-medium text-blue-600 bg-white rounded-md shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 ease-in-out border border-blue-300 flex items-center justify-center">
            Login
          </button>
        </Link> */}

          <SignOutButton />
          <Link href="/dashboard">
            <button className="w-full sm:w-auto px-6 py-2 text-sm font-medium text-blue-600 bg-white rounded-md shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-150 ease-in-out border border-blue-300 flex items-center justify-center">
              dashboard
            </button>
          </Link>

          <SignedIn>
            <div>
              <h1>this is only content show in login Process</h1>
            </div>
          </SignedIn>
        </>
      </div>
    </>
  );
}
