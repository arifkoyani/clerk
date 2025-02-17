"use client";
import { NavigationProvider } from "./context";
import Mainpage from "./mainpage/page";
export default function Home() {
  return (
    <>
      <NavigationProvider>
        <Mainpage />
      </NavigationProvider>
    </>
  );
}
