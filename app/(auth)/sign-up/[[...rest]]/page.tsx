"use client";

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <SignUp
          routing="path"
          path="/sign-up"
          appearance={{
            elements: {
              formButtonPrimary: "bg-green-500 hover:bg-green-600 text-white",
              formFieldInput: "border-gray-300 focus:ring-green-500",
            },
          }}
        />
      </div>
    </div>
  );
}
