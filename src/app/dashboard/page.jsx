"use client";

import Link from "next/link";
import { UserButton, ClerkLoaded, ClerkLoading, useUser, SignedOut, SignInButton } from "@clerk/nextjs";
import Loader from "../loader/page";

export default function SuccessfulLoginLanding() {
  const { user } = useUser();
  console.log(user);
  console.log(user?.primaryEmailAddress.emailAddress, "ayaz");

  return (
    <div className="container mx-auto px-4 py-8">
      <ClerkLoading>
        <Loader />
      </ClerkLoading>
      <ClerkLoaded>
        <header className="mb-8  flex justify-between items-center px-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome back, {user?.firstName}!
            </h1>
            <p className="text-gray-600 mt-2">
              You've successfully logged in. Here's your dashboard.
            </p>
          </div>

          <div>
            <UserButton afterSwitchSessionUrl="/login" />
          </div>
        </header>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 rounded-full p-3 mr-4"></div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                {user?.firstName}
              </h2>
              <p className="text-gray-600">
                {user?.primaryEmailAddress.emailAddress}
              </p>
            </div>
          </div>
          <p className="text-gray-700"></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <QuickActionCard
            title="Notifications"
            description="You have 3 unread notifications"
          />
          <QuickActionCard
            title="Account Settings"
            description="Update your profile and preferences"
          />
          <QuickActionCard
            title="Logout"
            description="Securely log out of your account"
          />
        </div>
      </ClerkLoaded>
    </div>
  );
}

function QuickActionCard() {
  return (
    <Link href="/" className="block">
      <ClerkLoaded>
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Home</h3>
          </div>
          <p className="text-gray-600">description</p>
        </div>
      </ClerkLoaded>
    </Link>
  );
}