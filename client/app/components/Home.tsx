"use client";
import React from "react";
import CardStats from "./CardStats";
import Image from "next/image";
import { FaBell } from "react-icons/fa";
import profile from "@/public/profile.jpg";

const CustomHeader = () => {
  return (
    <div
      id="/"
      className="bg-gray-100 rounded-3xl p-6 w-full max-w-4xl mx-auto"
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
            <Image src={profile} alt="Profile" fill className="object-cover" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Good Morning</p>
            <h2 className="text-lg font-bold">Reze</h2>
          </div>
        </div>
        <button className="p-2 bg-white rounded-full border-2 border-white hover:bg-gray-50 transition-colors">
          <FaBell className="w-5 h-5" />
        </button>
      </div>

      <div className="mb-8">
        <h1 className="text-2xl font-normal">How Are You</h1>
        <h1 className="text-2xl font-normal">Feeling Today?</h1>
      </div>

      <div className="flex items-center gap-2">
        <button className="px-6 py-2 bg-gray-100 border-3 border-white rounded-full shadow-sm hover:bg-gray-200 transition-colors z-10">
          Good
        </button>
        <div className="w-5 h-5 bg-white rounded-full -mx-2 z-0" />
        <button className="px-6 py-2 bg-gray-100 border-3 border-white rounded-full shadow-sm hover:bg-gray-200 transition-colors z-10">
          Fair
        </button>
        <div className="w-5 h-5 bg-white rounded-full -mx-2 z-0" />

        <button className="px-6 py-2 bg-gray-100 border-3 border-white rounded-full shadow-sm hover:bg-gray-200 transition-colors z-10">
          Bad
        </button>
        <div className="ml-2">
          <button className="p-2 bg-blue-600 rounded-full border-3 border-white hover:bg-blue-700 transition-colors">
            <FaBell className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

const HomeScreen = () => {
  return (
    <section className="bg-white p-2">
      <div className=" mx-auto">
        <CustomHeader />
        <CardStats />
      </div>
    </section>
  );
};

export default HomeScreen;
