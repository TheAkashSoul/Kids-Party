import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXing } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col md:mt-40 mt-28 w-full md:w-[80%] mx-auto mb-4 justify-between gap-4">
      <div className="flex flex-col lg:flex-row lg:gap-32 gap-12 px-12 md:px-0">
        <div className="flex flex-col lg:w-[30%] w-full">
          <div className="h-10 w-10 lg:h-20 lg:w-20">
            <Link href="/">
              <Image
                src={
                  "https://yombu.com/wp-content/uploads/2023/04/Yombu-Logo-TSP-Bkg-Web.png"
                }
                alt="logo"
                height={70}
                width={70}
              />
            </Link>
          </div>

          <div className="mt-5">
            <h2 className="font-bold text-xl">Get in Touch</h2>
            <p className="font-light text-sm mt-2">
              Need help planning your next kids party or event? We are
              passionate about providing an unrivalled kids party entertainment
              service for busy parents. Get in touch easily by emailing us
              (Click on the email address below) or by using the live chat.
            </p>
          </div>

          <div className="flex flex-row items-center gap-2 mt-5">
            <div className="h-12 w-12 bg-white rounded-full overflow-hidden flex items-center justify-center border-2 border-pink-300">
              <Image
                src={
                  "https://yombu.com/wp-content/uploads/2023/05/Yombu-Events-Alice-Hayes-Profile-Image.png"
                }
                alt="Aunty image"
                height={50}
                width={50}
                className="border-2 border-white rounded-full"
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-black font-semibold text-sm">
                Alice@yomdi.com
              </p>
              <p className="text-[#FFC8C3] font-bold text-sm">
                will help in less than 1 hr
              </p>
            </div>
          </div>

          <div className="flex flex-row mt-14 gap-4">
            <Link href={"/"}>
              <FaFacebookF size={22} color="#FFC3C3" />
            </Link>
            <Link href={"/"}>
              <FaTwitter size={22} color="#FFC3C3" />
            </Link>
            <Link href={"/"}>
              <FaInstagram size={22} color="#FFC3C3" />
            </Link>
            <Link href={"/"}>
              <FaPinterestP size={22} color="#FFC3C3" />
            </Link>
            <Link href={"/"}>
              <BsMedium size={20} color="#FFC3C3" />
            </Link>
            <Link href={"/"}>
              <FaLinkedinIn size={22} color="#FFC3C3" />
            </Link>
            <Link href={"/"}>
              <FaXing size={22} color="#FFC3C3" />
            </Link>
            <Link href={"/"}>
              <FaYoutube size={22} color="#FFC3C3" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between w-full">
          <div className="hidden md:flex flex-row justify-between gap-5 mb-6">
            <div>
              <p className="text-black font-semibold text-base mb-2">
                Yomdi Events, Inc
              </p>
              <Link href="/" className="text-black font-light text-sm">
                Home
              </Link>
            </div>
            <div>
              <p className="text-black font-semibold text-base mb-2">
                Legal Address
              </p>
              <p className="text-black font-light text-sm">2011 B Temple St,</p>
              <p className="text-black font-light text-sm">
                Wilmington, AP 12345
              </p>
            </div>
            <div>
              <p className="text-black font-semibold text-base mb-2">Phone</p>
              <p className="text-black font-light text-sm">+1 123 456-7890</p>
              <p className="text-[#FFC8C3] font-bold text-sm">9-5pm mon-fri</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="flex flex-col items-start">
              <p className="text-black font-bold text-base mb-2">
                Where we Work
              </p>
              <Link className="font-light text-sm mb-1" href="">
                Atlanta
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Boston
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Chicago
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Dallas
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Houston
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Jacksonville
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Los Angeles
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Miami
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                New York
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Phoenix
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                San Diego
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                San Francisco
              </Link>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-black font-bold text-base mb-1">Blog</p>
              <Link className="font-light text-sm mb-2" href="">
                Home
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Party Guide
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Party Planning
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Entertainment
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                First Birthday
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Just for Fun
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Party Games
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                News
              </Link>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-black font-bold text-base mb-2">Links</p>
              <Link className="font-light text-sm mb-1" href="">
                FAQ
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Privacy Policy
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Refund Policy
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Publishing
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Principals
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Terms of Service
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                About Us
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Contact Us
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                The Team
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Work at Yomdi
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                List a Venue
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Index
              </Link>
              <Link className="font-light text-sm mb-1" href="">
                Invites
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex items-center justify-center px-12 md:px-0">
        <p className="text-xs md:text-sm font-light text-center">
          &copy; Yomdi Events, Inc. 2024, all rights reserved
        </p>
      </div>
    </footer>
  );
}
