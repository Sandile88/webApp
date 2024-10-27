"use client";
import React from "react";

const BottomNav = (props: { onToggle: any }) => {
  return (
    <section>
      <div className="fixed bottom-0 w-full h-16 bg-gray-200 border-t rounded-lg border-gray-200">
        <div className="grid h-full max-w-lg grid-cols-3 mx-auto">
          {/* home tab */}
          <div
            onClick={() => {
              props.onToggle(0);
            }}
            className="inline-flex flex-col items-center justify-center hover:bg-gray-50 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Home
            </span>
          </div>

          <div
            onClick={() => {
              props.onToggle(1);
            }}
            // href="mobileclinic"
            className="inline-flex flex-col items-center justify-center hover:bg-gray-50 group"
          >
            <div className="inline-flex items-center justify-center w-7 h-7 mb-1 bg-blue-600 rounded-lg hover:bg-blue-700 group">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Book
            </span>
          </div>

          <div
            onClick={() => {
              props.onToggle(2);
            }}
            // href="/profile"
            // type="button"
            className="inline-flex flex-col items-center justify-center hover:bg-gray-50 group"
          >
            <svg
              className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Profile
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomNav;
