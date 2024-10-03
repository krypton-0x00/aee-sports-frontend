"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/atomic/CustomButton";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { SERVER_URI } from "@/constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const registerSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<z.ZodIssue[]>([]);
  const [serverError, setServerError] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const validatedUser = registerSchema.parse(formData);

      const response = await axios.post(
        `${SERVER_URI}auth/register`,
        validatedUser,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      console.log(response);
      localStorage.setItem("id", response.data.payload.id);
      toast.success("Registration successful!", {
        theme: "dark",
        style: { background: "#F35B19", color: "#FFFFFF" }
      });
      router.push("/login");
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.issues);
        toast.error("Please check your input and try again", {
          theme: "dark",
          style: { background: "#F35B19", color: "#FFFFFF" }
        });
      } else if (error instanceof AxiosError) {
        setServerError(error.response?.data?.message || "An error occurred during registration");
        toast.error(error.response?.data?.message || "An error occurred during registration", {
          theme: "dark",
          style: { background: "#F35B19", color: "#FFFFFF" }
        });
      }
    }
  };

  const getErrorMessage = (field: keyof RegisterFormData) => {
    return errors.find((error) => error.path[0] === field)?.message;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-black p-10 shadow-2xl border border-gray-800">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-white">
            Join AEE SPORTS
          </h2>
          <p className="mt-2 text-sm text-gray-400">Create your account</p>
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
              {getErrorMessage("email") && (
                <p className="mt-1 text-sm text-red-500">
                  {getErrorMessage("email")}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-highlight focus:outline-none focus:ring-highlight sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              {getErrorMessage("password") && (
                <p className="mt-1 text-sm text-red-500">
                  {getErrorMessage("password")}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-highlight focus:outline-none focus:ring-highlight sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {getErrorMessage("confirmPassword") && (
                <p className="mt-1 text-sm text-red-500">
                  {getErrorMessage("confirmPassword")}
                </p>
              )}
              {serverError && (
                <p className="mt-1 text-sm text-red-500">
                  {serverError}
                </p>
              )}
            </div>
          </div>

          <div>
            <Button text="Sign up" type="submit" className="w-full" />
          </div>
        </form>
        <div className="text-center">
          <p className="mt-2 text-sm text-gray-400">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-highlight hover:text-highlight-dark"
            >
              Sign in
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
