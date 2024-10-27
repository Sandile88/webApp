"use client";
import React, { useState, ReactNode } from "react";
import { Bell, FileText, LockIcon, Share2 } from "lucide-react";
import {
  ConnectButton,
  ThirdwebProvider,
  useSetActiveWallet,
} from "thirdweb/react";
import { ethereum } from "thirdweb/chains";
import { client, wallets } from "../utils/thirdweb_utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface PersonalInfo {
  name: string;
  dateOfBirth: string;
  bloodType: string;
  allergies: string[];
  emergencyContact: string;
}

interface AccessRequest {
  id: number;
  requester: string;
  organization: string;
  date: string;
  status: "pending" | "approved";
  dataRequested: string[];
}

interface MedicalRecord {
  id: number;
  type: string;
  date: string;
  provider: string;
  description: string;
  size: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-white shadow rounded-lg ${className}`}>{children}</div>
);

const MedicalDashboardWrapper: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "records" | "access">(
    "overview"
  );

  // Sample data - in a real app this would come from your backend
  const personalInfo: PersonalInfo = {
    name: "REDACTED",
    dateOfBirth: "REDACTED",
    bloodType: "O+",
    allergies: ["Penicillin", "Peanuts"],
    emergencyContact: "REDACTED",
  };

  const accessRequests: AccessRequest[] = [
    {
      id: 1,
      requester: "Dr. S Jabulani",
      organization: "Chris Hani Hospital",
      date: "2024-10-25",
      status: "pending",
      dataRequested: ["Medical History", "Recent Lab Results"],
    },
    {
      id: 2,
      requester: "Dr. M Mtiyane",
      organization: "Specialized Care Clinic",
      date: "2024-10-24",
      status: "approved",
      dataRequested: ["Vaccination Records"],
    },
  ];

  const medicalRecords: MedicalRecord[] = [
    {
      id: 1,
      type: "Lab Result",
      date: "2024-10-20",
      provider: "City Labs",
      description: "Annual Blood Work",
      size: "1.2mb",
    },
    {
      id: 2,
      type: "Vaccination Record",
      date: "2024-10-15",
      provider: "Community Clinic",
      description: "COVID-19 Booster",
      size: "0.8mb",
    },
    {
      id: 3,
      type: "Medical Image",
      date: "2024-09-30",
      provider: "Radiology Center",
      description: "Chest X-Ray",
      size: "15.4mb",
    },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
        <div className="flex items-center">
          <LockIcon className="h-4 w-4 text-blue-400 mr-2" />
          <div>
            <h3 className="text-blue-800 font-medium">
              Your Medical Data is Secure
            </h3>
            <p className="text-blue-700 text-sm mt-1">
              You have full control over who can access your medical
              information.
              {accessRequests.filter((r) => r.status === "pending").length >
                0 &&
                ` You have ${
                  accessRequests.filter((r) => r.status === "pending").length
                } pending access requests.`}
            </p>
          </div>
        </div>
      </div>

      <Card>
        {/* Personal Info Card Content */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Personal Information
          </h2>
          <dl className="divide-y divide-gray-100">
            {Object.entries(personalInfo).map(([key, value]) => (
              <div key={key} className="grid grid-cols-3 gap-4 py-3">
                <dt className="font-medium text-gray-900">
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </dt>
                <dd className="col-span-2 text-gray-700">
                  {Array.isArray(value) ? value.join(", ") : value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Card>
    </div>
  );

  const renderAccessRequests = () => (
    <div className="space-y-4">
      {accessRequests.map((request) => (
        <Card
          key={request.id}
          className={
            request.status === "pending"
              ? "border border-yellow-200 bg-yellow-50"
              : ""
          }
        >
          {/* Access Request Card Content */}
          <div className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">
                  {request.requester}
                </h3>
                <p className="text-sm text-gray-500">{request.organization}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Requested: {request.date}
                </p>
                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-900">
                    Requesting access to:
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {request.dataRequested.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {request.status === "pending" ? (
                <div className="space-x-2">
                  <button className="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded hover:bg-green-700">
                    Approve
                  </button>
                  <button className="px-3 py-1 text-sm font-medium text-white bg-red-600 rounded hover:bg-red-700">
                    Deny
                  </button>
                </div>
              ) : (
                <span className="px-2 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                  Approved
                </span>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderMedicalRecords = () => (
    <div className="space-y-4">
      {medicalRecords.map((record) => (
        <Card key={record.id}>
          <div className="p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <FileText className="h-8 w-8 text-gray-400 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">
                    {record.description}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {record.provider} • {record.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-500">{record.size}</span>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="px-3 py-1 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View
                </button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Medical Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-400 hover:text-gray-500 relative">
            <Bell className="h-6 w-6" />
            {accessRequests.filter((r) => r.status === "pending").length >
              0 && (
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
            )}
          </button>
        </div>
      </div>

      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          {["overview", "records", "access"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
              className={`pb-4 px-1 ${
                activeTab === tab
                  ? "border-b-2 border-indigo-500 text-indigo-600"
                  : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      <main>
        {activeTab === "overview" && renderOverview()}
        {activeTab === "access" && renderAccessRequests()}
        {activeTab === "records" && renderMedicalRecords()}
      </main>

      <div className="mt-8">
        <ConnectButton
          client={client}
          wallets={wallets}
          onDisconnect={() => {
            // reload to /
          }}
          connectButton={{ label: "Sign In" }}
          connectModal={{ size: "compact" }}
          accountAbstraction={{
            chain: ethereum,
            sponsorGas: true,
          }}
        />
      </div>
    </div>
  );
};

// const queryClient = new QueryClient();

export default function MedicalDashboard() {
  return (
    // <QueryClientProvider client={queryClient}>
    <MedicalDashboardWrapper />
    // {/* </QueryClientProvider> */}
  );
}
