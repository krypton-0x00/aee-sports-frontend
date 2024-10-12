"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { SERVER_URI } from "@/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const forgetSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ForgetFormData = z.infer<typeof forgetSchema>;

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

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const validatedData = forgetSchema.parse({ email });

      const response = await axios.post(
        `${SERVER_URI}auth/forget`,
        validatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success("Password reset email sent successfully!", toastConfig);
      router.push("/login");
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.issues.forEach((issue) => {
          toast.error(issue.message, toastConfig);
        });
      } else if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message ||
            "An error occurred while processing your request",
          toastConfig
        );
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-black p-10 shadow-2xl border border-gray-800">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-white">
            Forgot Password
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Enter your email to reset your password
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-highlight focus:outline-none focus:ring-highlight sm:text-sm"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-highlight py-2 px-4 text-sm font-medium text-white hover:bg-highlight-dark focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2"
            >
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
