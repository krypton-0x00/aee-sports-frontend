"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/atomic/CustomButton";
import { z } from "zod";
import { SERVER_URI } from "@/constants";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<z.ZodIssue[]>([]);
  const [serverError, setServerError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const validated = loginSchema.parse({ email, password });
      if (validated) {
        await axios
          .post(
            `${SERVER_URI}auth/login`,
            { email, password },
            {
              headers: {
                'Content-Type': 'application/json',
              },
              withCredentials: true,
            }
          )
          .then((res) => {
            console.log(res);
            
            toast.success("Login successful!", {
              theme: "dark",
              style: { background: "#F35B19", color: "#FFFFFF" }
            });
            router.push("/");
          })
          .catch((err) => {
            setServerError(err.response?.data?.message || err.message);
            toast.error(err.response?.data?.message || "An error occurred during login", {
              theme: "dark",
              style: { background: "#F35B19", color: "#FFFFFF" }
            });
            console.log(err);
          });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.issues);
        toast.error("Please ceck your input and try again", {
          theme: "dark",
          style: { background: "#F35B19", color: "#FFFFFF" }
        });
      }
    }
  };

  const getErrorMessage = (field: string) => {
    return errors.find((error) => error.path[0] === field)?.message;
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-white placeholder-gray-500 focus:z-10 focus:border-highlight focus:outline-none focus:ring-highlight sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {getErrorMessage("password") && (
                <p className="mt-1 text-sm text-red-500">
                  {getErrorMessage("password")}
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
      />
    </div>
  );
}
