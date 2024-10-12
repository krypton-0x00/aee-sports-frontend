"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { SERVER_URI } from "@/constants.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const verifySchema = z.object({
  otp: z
    .string()
    .length(6, "OTP must be 6 digits")
    .regex(/^\d+$/, "OTP must contain only digits"),
});

type VerifyFormData = z.infer<typeof verifySchema>;

const toastConfig = {
  position: "top-right" as const,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark" as const,
  style: { background: "#F35B19", color: "#FFFFFF" },
};

export default function VerifyPage() {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const validatedData = verifySchema.parse({ otp });

      const response = await axios.post(
        `${SERVER_URI}auth/verify-email`,
        validatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success("Email verified successfully!", toastConfig);
      router.push("/login");
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.issues.forEach((issue) => {
          toast.error(issue.message, toastConfig);
        });
      } else if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message ||
            "An error occurred during verification",
          toastConfig
        );
      }
    }
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-black p-10 shadow-2xl border border-gray-800">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-white">
            Verify Your Email
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Enter the 6-digit OTP sent to your email
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="otp" className="sr-only">
              6-Digit OTP
            </label>
            <input
              id="otp"
              name="otp"
              type="text"
              inputMode="numeric"
              pattern="\d{6}"
              maxLength={6}
              required
              className="relative block w-full appearance-none rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-highlight focus:outline-none focus:ring-highlight sm:text-sm"
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={handleOtpChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-highlight py-2 px-4 text-sm font-medium text-white hover:bg-highlight-dark focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2"
            >
              Verify Email
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
