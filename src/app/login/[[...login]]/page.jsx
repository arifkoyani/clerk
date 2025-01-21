import { SignIn,GoogleOneTap } from "@clerk/nextjs";
import React from "react";

const SignInn = () => {
  return (
    <div className="flex justify-center m-auto items-center pt-32">
      <SignIn  forceRedirectUrl={"/profile"} />
      {/* <GoogleOneTap   forceRedirectUrl={"/dashboard"}/> */}
    </div>
  );
};

export default SignInn;
