"use client";

import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
        <SignIn
          routing="path"
          path="/sign-in"
          appearance={{
            elements: {
              formButtonPrimary: "bg-blue-500 hover:bg-blue-600 text-white",
              formFieldInput: "border-gray-300 focus:ring-blue-500",
            },
          }}
        />
      </div>
    </div>
  );
}
