import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="py-8 mt-40 border-t-[1px]">
      <div className="container px-4 mx-auto text-center  flex flex-col lg:flex-row justify-between">
        <div className="flex flex-col">
          <Link href="/">
            <div className="text-2xl  font-bold lg:text-left text-center">
              NxS Esports
            </div>
          </Link>
          <div className=" text-sm mt-2 lg:mt-0">
            &copy; {2024} NxS Esports. All rights reserved.
          </div>
        </div>
        <nav className="flex flex-col items-center gap-4">
          <div className="flex flex-col lg:flex-row items-center">
            <Link href="/about">
              <p className=" hover:text-gray-400 text-sm mr-4 lg:mr-8 my-2 lg:my-0">
                About
              </p>
            </Link>
            <Link href="/contact">
              <p className=" hover:text-gray-400 text-sm mr-4 lg:mr-8 my-2 lg:my-0">
                Contact
              </p>
            </Link>
            <Link href="/privacy-policy">
              <p className=" hover:text-gray-400 text-sm mr-4 lg:mr-8 my-2 lg:my-0">
                Privacy Policy
              </p>
            </Link>
            <Link href="/terms-of-service">
              <p className=" hover:text-gray-400 text-sm mr-4 lg:mr-8 my-2 lg:my-0">
                Terms of Service
              </p>
            </Link>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <Link href="youtube.com">
              <FaYoutube className="text-2xl hover:text-gray-400" />
            </Link>
            <Link href="instagram.com">
              <FaInstagram className="text-2xl hover:text-gray-400" />
            </Link>
            <Link href="whatsapp.com">
              <FaWhatsapp className="text-2xl hover:text-gray-400" />
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
