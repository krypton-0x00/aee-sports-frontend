"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/atomic/CustomButton";
import { z } from "zod";
import { SERVER_URI } from "@/constants";
import axios, { AxiosError } from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const toastConfig = {
  position: "top-right" as const,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark" as const,
  style: { background: "#F35B19", color: "#FFFFFF" }
};

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const validatedUser = loginSchema.parse(formData);

      const response = await axios.post(
        `${SERVER_URI}auth/login`,
        validatedUser,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      console.log(response);
      toast.success("Login successful!", toastConfig);
      router.push("/");
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.issues.forEach((issue) => {
          toast.error(issue.message, toastConfig);
        });
      } else if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || "An error occurred during login", toastConfig);
      }
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-black p-10 shadow-2xl border border-gray-800">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-white">
            Welcome back to AEE SPORTS
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Please sign in to your account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-highlight focus:outline-none focus:ring-highlight sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-highlight focus:outline-none focus:ring-highlight sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <Button text="Log in" type="submit" className="w-full" />
          </div>
        </form>
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-highlight hover:text-highlight-dark"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        theme="dark"
        toastStyle={{ background: "#F35B19", color: "#FFFFFF" }}
      />
    </div>
  );
}
