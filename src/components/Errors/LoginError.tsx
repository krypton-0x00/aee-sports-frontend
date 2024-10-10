import Link from "next/link";
import React from "react";

const LoginError = () => {
  return (
    <div>
      <div className="text-center text-2xl font-bold p-10">
        Please{" "}
        <Link href="/login" className="text-blue-500 underline">
          login
        </Link>{" "}
        to create a tournament.
      </div>
    </div>
  );
};

export default LoginError;
