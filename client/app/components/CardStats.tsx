"use client"
import React from 'react'
import brain from '../../public/brain.png';
import blood_cell from '../../public/blood_cell.png';
import heart from '../../public/heart.png';
import kidney from '../../public/kidney.png';
import Image from 'next/image';
import Link from 'next/link';

const CardStats = () => {
  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 gap-6 mt-8 sm:grid-cols-2 md:mt-16 lg:gap-x-12">
          <Link href="conditions?organ=brain" className="group">
            <div className="bg-gray-100 p-4 rounded-3xl border-4 border-white shadow-lg">
                <Image 
                  className="w-full transition-transform duration-300 group-hover:scale-105 relative aspect-square" 
                  src={brain} 
                  alt="Brain illustration"
                />
            </div>
          </Link>

          <Link href="conditions?organ=blood" className="group">
            <div className="bg-gray-100 p-4 rounded-3xl border-4 border-white shadow-lg">
                <Image 
                  className="w-full transition-transform duration-300 group-hover:scale-105 relative aspect-square" 
                  src={blood_cell} 
                  alt="Blood cell illustration"
                />
            </div>
          </Link>

          <Link href="conditions?organ=heart" className="group">
            <div className="bg-gray-100 p-4 rounded-3xl border-4 border-white shadow-lg">
                <Image 
                  className="w-full transition-transform duration-300 group-hover:scale-105 relative aspect-square" 
                  src={heart} 
                  alt="Heart illustration"
                />
            </div>
          </Link>

          <Link href="conditions?organ=kidney" className="group">
            <div className="bg-gray-100 p-4 rounded-3xl border-4 border-white shadow-lg">
                <Image 
                  className="w-full transition-transform duration-300 group-hover:scale-105 relative aspect-square" 
                  src={kidney} 
                  alt="Kidney illustration"
                />
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CardStats;