"use client";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import { Button } from "../ui/button";
import axios from "axios";
import { SERVER_URI } from "@/constants";
import { User } from "@/types/user.type.js";
import ProfileIcon from "../atomic/profileIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const data = localStorage.getItem("user");
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = data ? JSON.parse(data) : null;

        if (!user) {
          setIsAuthenticated(false);
          return;
        }

        const response = await axios.post(
          `${SERVER_URI}auth/check-auth`,
          { id: user.id },
          {
            withCredentials: true,
          }
        );

        if (response.data.success) {
          setIsAuthenticated(true);
          setUser(response.data.data);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [data]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "/", icon: IoHomeOutline, label: "Home" },
    {
      href: "/create-tournament",
      icon: FaRankingStar,
      label: "Create Tournament",
    },
    { href: "/tournaments", icon: MdOutlineShoppingCart, label: "Tournaments" },
    { href: "/leaderboard", icon: GoGraph, label: "Leaderboard" },
  ];

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        <button
          className="md:hidden text-white z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <IoCloseOutline size={24} /> : <HiMenu size={24} />}
        </button>

        <Link href="/" className="hidden md:block text-2xl font-bold">
          AEE SPORTS
        </Link>

        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-1 px-3 py-2 rounded transition ${
                activeLink === item.href
                  ? "bg-highlight text-white"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => setActiveLink(item.href)}
            >
              <item.icon className="text-xl" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        {isAuthenticated && user ? (
          <ProfileIcon text={user.name.charAt(0) || ""} />
        ) : (
          <Link href="/login">
            <Button variant="outline" className="border-highlight text-white">
              Login
            </Button>
          </Link>
        )}
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-64 bg-black z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo in sidebar for mobile */}
        <div className="p-4 border-b border-gray-700">
          <Link href="/" className="text-2xl font-bold" onClick={closeMenu}>
            AEE SPORTS
          </Link>
        </div>
        <div className="pt-4 px-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-2 px-4 py-2 mb-2 ${
                activeLink === item.href
                  ? "bg-highlight text-white"
                  : "hover:bg-gray-700"
              }`}
              onClick={() => {
                setActiveLink(item.href);
                closeMenu();
              }}
            >
              <item.icon className="text-xl" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
