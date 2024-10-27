"use client";

import { ConnectButton, ThirdwebProvider } from "thirdweb/react";
import { ethereum } from "thirdweb/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useActiveWallet } from "thirdweb/react";
import Image from "next/image";
import BottomNav from "./components/BottomNav";
import { client, wallets } from "./utils/thirdweb_utils";
import HomeScreen from "./components/Home";
import { useState } from "react";
import MobileClinic from "./mobileclinic/page";
import MedicalDashboard from "./profile/page";

// Login view component
function UnauthenticatedView() {
  return (
    <div className="h-[100dvh] flex flex-col overflow-hidden p-4 justify-between">
      <div className="pt-4">
        <div className="flex justify-center">
          <Image
            src="/images/moyo.png"
            height={150}
            width={150}
            alt="Moyo Logo"
          />
        </div>
      </div>
      <Image
        src="/images/login-bg.png"
        height={500}
        width={500}
        alt="Login Background"
      />
      <div className="pb-8 flex justify-center">
        <ConnectButton
          client={client}
          wallets={wallets}
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
}

// Connected view component
function AuthenticatedView() {
  const [screenIndex, setScreenIndex] = useState(0);

  const renderTab = () => {
    if (screenIndex == 0) {
      return <HomeScreen />;
    } else if (screenIndex == 1) {
      return <MobileClinic />;
    }

    return <MedicalDashboard />;
  };

  return (
    <>
      {renderTab()}
      <BottomNav onToggle={setScreenIndex} />
    </>
  );
}

// App Wrapper Component
const AppWrapper = () => {
  const wallet = useActiveWallet();
  return wallet ? <AuthenticatedView /> : <UnauthenticatedView />;
};

// Main Home Component
function Home() {
  return <AppWrapper />;
}

export default Home;

// // File: app/utils/thirdweb_utils.ts
// import { createThirdwebClient } from "thirdweb";
// import {
//   coinbaseWallet,
//   metamaskWallet,
//   walletConnect,
// } from "thirdweb/wallets";

// export const client = createThirdwebClient({
//   clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
// });

// export const wallets = [metamaskWallet(), coinbaseWallet(), walletConnect()];

// // File: app/components/BottomNav.tsx
// import React from "react";

// const BottomNav: React.FC = () => {
//   return (
//     <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-around">
//           {/* Add your navigation items here */}
//           <button className="text-gray-600 hover:text-indigo-600">Home</button>
//           <button className="text-gray-600 hover:text-indigo-600">
//             Records
//           </button>
//           <button className="text-gray-600 hover:text-indigo-600">
//             Profile
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default BottomNav;
