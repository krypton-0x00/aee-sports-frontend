"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { SERVER_URI } from "@/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const resetSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetFormData = z.infer<typeof resetSchema>;

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

export default function ResetPasswordPage() {
  const [formData, setFormData] = useState<ResetFormData>({
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const validatedData = resetSchema.parse(formData);

      // Extract token from URL
      const token = window.location.pathname.split("/").pop();
      console.log(token);

      const response = await axios.post(
        `${SERVER_URI}auth/reset-password/${token}`,
        validatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success("Password reset successfully!", toastConfig);
      router.push("/login");
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.issues.forEach((issue) => {
          toast.error(issue.message, toastConfig);
        });
      } else if (error instanceof AxiosError) {
        toast.error(
          error.response?.data?.message ||
            "An error occurred while resetting your password",
          toastConfig
        );
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-black p-10 shadow-2xl border border-gray-800">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-white">Reset Password</h2>
          <p className="mt-2 text-sm text-gray-400">Enter your new password</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="password" className="sr-only">
                New Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-highlight focus:outline-none focus:ring-highlight sm:text-sm"
                placeholder="New Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm New Password
              </label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-highlight focus:outline-none focus:ring-highlight sm:text-sm"
                placeholder="Confirm New Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-highlight py-2 px-4 text-sm font-medium text-white hover:bg-highlight-dark focus:outline-none focus:ring-2 focus:ring-highlight focus:ring-offset-2"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
