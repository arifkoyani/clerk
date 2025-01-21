"use client";

import { SignInButton } from "@clerk/nextjs";
import { CheckCircle } from "lucide-react";

export default function LogoutSuccessful() {
  return (
    <div className="bg-white mx-auto shadow-lg mt-40 rounded-lg p-8 max-w-md w-full ">
      <div className="text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Logout Successful
        </h1>
        <p className="text-gray-600 mb-6">
          You have been safely logged out of your account. Thank you for using
          our service.
        </p>
        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 mb-4">
            Do you want to log back in?
          </p>

          <SignInButton forceRedirectUrl={"/profile"}>Login in account</SignInButton>
        </div>
      </div>
    </div>
  );
}
