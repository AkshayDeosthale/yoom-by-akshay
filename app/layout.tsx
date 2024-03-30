import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import "react-datepicker/dist/react-datepicker.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boom",
  description: "Video Calling app",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/icons/yoom-logo.svg",
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "white",
            colorBackground: "#1C1F2E",
            colorPrimary: "#0E78F9",
            colorInputBackground: "#252A41",
            colorInputText: "white",
          },
        }}
      >
        <body className={`${inter.className} text-white bg-dark-2`}>
          {children}
        </body>
        <Toaster />
      </ClerkProvider>
    </html>
  );
}
