"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import all images
import brain from "../../public/brain.png";
import blood_cell from "../../public/blood_cell.png";
import heart from "../../public/heart.png";
import kidney from "../../public/kidney.png";

// Define cards data to make component more maintainable
const organCards = [
  {
    id: "brain",
    image: brain,
    alt: "Brain illustration",
    href: "conditions?organ=brain",
  },
  {
    id: "blood",
    image: blood_cell,
    alt: "Blood cell illustration",
    href: "conditions?organ=blood",
  },
  {
    id: "heart",
    image: heart,
    alt: "Heart illustration",
    href: "conditions?organ=heart",
  },
  {
    id: "kidney",
    image: kidney,
    alt: "Kidney illustration",
    href: "conditions?organ=kidney",
  },
];

const CardStats = () => {
  return (
    <section className="py-4 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-2 md:mt-8 lg:gap-x-12">
          {organCards.map((card) => (
            <Link key={card.id} href={card.href} className="group">
              <div className="bg-gray-100 rounded-3xl border-white shadow-lg overflow-hidden">
                <Image
                  className="w-full transition-transform duration-300 group-hover:scale-105 relative aspect-square object-cover"
                  src={card.image}
                  alt={card.alt}
                  priority={card.id === "brain"} // Prioritize loading the first image
                  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardStats;
