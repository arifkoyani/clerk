"use client";
import Link from "next/link";
import {
  UserButton,
  ClerkLoaded,
  ClerkLoading,
  useUser,
  SignedOut,
  SignedIn,
  SignInButton,
  RedirectToSignIn,
} from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { NavigationProvider } from "../context";
import Loader from "../loader/page";
import { useContext } from "react";

export default function SuccessfulLoginLanding() {
  const { user } = useUser();
  const { setIsMobileNavOpen, isMobileNavOpen, closeMobileNav } =
    useContext(NavigationProvider);
  return (
    <div>
      <ClerkLoading>
        <Loader />
      </ClerkLoading>
      <ClerkLoaded>
        <nav className=" bg-black text-white py-4   flex justify-around items-center">
          <div>
            <Menu className="cursor-pointer" />
          </div>
          <h1 className="text-3xl font-bold text-white">
            Welcome back, {user?.firstName}!
          </h1>

          <div>
            <UserButton
              afterSwitchSessionUrl="/login"
              onchage={() => setIsMobileNavOpen(!true)}
            />
          </div>
        </nav>
      </ClerkLoaded>

      <div></div>
    </div>
  );
}
