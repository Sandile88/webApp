import { createThirdwebClient } from "thirdweb";
import { inAppWallet, createWallet } from "thirdweb/wallets";

export const client = createThirdwebClient({
  clientId: "509114a5f65331d548cc997ba5bcb561",
});

export const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "email", "passkey", "phone", "apple"],
    },
  }),
];
