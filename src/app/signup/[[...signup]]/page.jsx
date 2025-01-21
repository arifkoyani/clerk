"use client";
import React from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpp = () => {
  return (
    <div className="flex flex-col h-96">
      <div className="m-auto">
        <SignUp forceRedirectUrl={"/profile"} />
      </div>
    </div>
  );
};

export default SignUpp;
