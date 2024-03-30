import Navbar from "@/components/commons/Navbar";
import Sidebar from "@/components/commons/Sidebar";
import type { Metadata } from "next";

import React from "react";

export const metadata: Metadata = {
  title: "Boom",
  description: "Video Calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
