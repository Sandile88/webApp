"use client"
import React from 'react';
import Image from 'next/image';
import { FaArrowLeft, FaBell } from 'react-icons/fa6';
import { useSearchParams } from 'next/navigation';

type StatCardProps = {
    label: string;
    stat: string;
};

const organContent = {
  brain: {
    title: "My Brain",
    image: "/brain.png",
    stats: [
      { label: "Neural Activity", stat: "num 1" },
      { label: "Oxygen Level", stat: "98%" },
      { label: "Label 3", stat: "num 3" },
      { label: "Label 4", stat: "num 4" }
    ]
  },
  blood: {
    title: "My Blood",
    image: "/blood_cell.png",
    stats: [
      { label: "Hemoglobin", stat: "num 1" },
      { label: "White Blood Cells", stat: "num 2" },
      { label: "Platelets", stat: "num 3" },
      { label: "Label 4", stat: "num 4" }
    ]
  },
  heart: {
    title: "My Heart",
    image: "/heart.png",
    stats: [
      { label: "Heart Rate", stat: "120 bpm" },
      { label: "Blood Status", stat: "116/170" },
      { label: "Blood Count", stat: "80-90" },
      { label: "Glucose Level", stat: "9 000/ml" }
    ]
  },
  kidney: {
    title: "My Kidney",
    image: "/kidney.png",
    stats: [
      { label: "Label 1", stat: "num 1" },
      { label: "Label 2", stat: "num 2" },
      { label: "Label 3", stat: "num 3" },
      { label: "Label 4", stat: "num 4" }
    ]
  }
};

const VitalSigns = () => {
  const searchParams = useSearchParams();
  const organ = searchParams.get('organ') || 'heart';
  const content = organContent[organ as keyof typeof organContent];

  return (
    <section className="min-h-screen bg-white p-4">
      <div className="bg-gray-100 rounded-3xl p-6 w-full max-w-4xl mx-auto">
        {/* AppBar */}
        <AppBar title={content.title} />

        {/* Image Card */}
        <ImageCard imagePath={content.image} />

        {/* Stats List View */}
        <StatsListView stats={content.stats} />
      </div>
    </section>
  );
};

const AppBar = ({ title }: { title: string }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white rounded-2xl shadow-md mb-8">
      <button onClick={() => {}} aria-label="Go Back">
        <FaArrowLeft id="/" className="material-icons text-blue-700" />
      </button>
      <h1 className="text-xl font-semibold text-gray-200">{title}</h1>
      <button className="p-2 bg-white rounded-full border-3 border-white transition-colors">
          <FaBell className="text-blue-700 w-5 h-5" />
        </button>
    </header>
  );
};

const ImageCard = ({ imagePath }: { imagePath: string }) => {
  return (
    <div className="relative w-full h-72 bg-gray-200 rounded-3xl overflow-hidden mb-8">
      <Image
        src={imagePath}
        alt="Organ Image"
        layout="fill"
        objectFit="contain"
        className="rounded-3xl"
      />
    </div>
  );
};

const StatCard = ({ label, stat }: StatCardProps)=> {
  return (
    <div className="flex items-center bg-gray-200 rounded-xl p-4 mb-4 shadow-sm">
      <div className="w-16 h-16 bg-white rounded-lg mr-4 flex items-center justify-center">
        {/* Placeholder for Icon */}
      </div>
      <div>
        <p className="text-gray-700 text-lg font-semibold">{label}</p>
        <p className="text-gray-500 text-sm">{stat}</p>
      </div>
    </div>
  );
};

const StatsListView = ({ stats }: { stats: StatCardProps[] }) => {
  return (
    <div>
      {stats.map((stat, index) => (
        <StatCard key={index} label={stat.label} stat={stat.stat} />
      ))}
    </div>
  );
};

export default VitalSigns;