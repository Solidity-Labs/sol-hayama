import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import React from "react";
import { Toaster } from "react-hot-toast";

export const Layout = ({
  children,
  formatRpc,
}: {
  children: React.ReactNode;
  formatRpc: string;
}) => (
  <div className="flex flex-col h-screen">
    <div className="flex items-center border-b-2 border-gray-100 py-2 px-10 sm:justify-between sm:space-x-10">
      <div className="flex flex-row items-baseline">
        <div className="font-mono text-2xl font-light text-pink-500 text-left">
          🏖 Hayama
        </div>
        <div className="font-mono text-xs text-gray-600 px-3">
          NFT trade has never been so easy
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="font-mono text-base text-gray-600 px-3">
          {formatRpc}
        </div>
        <WalletMultiButton />
      </div>
    </div>
    <div className="w-fullscreen flex-grow">{children}</div>

    <footer className="flex items-center boarder-t-2 boarder-gray-100 bg-pink-300 py-2 px-10 sm:justify-between sm:space-x-10 bottom-0">
      <div className="font-mono text-xs text-gray-600">Hayama Lab © 2021</div>
      <div className="flex gap-3 h-5">
        <a href={`https://www.github.com`} target="_blank" rel="noreferrer">
          <Image alt="github" src="/github-brands.svg" height={20} width={20} />
        </a>
        <a href={`https://www.twitter.com`} target="_blank" rel="noreferrer">
          <Image
            alt="twitter"
            src="/twitter-brands.svg"
            height={20}
            width={20}
          />
        </a>
      </div>
    </footer>
    <Toaster />
  </div>
);
