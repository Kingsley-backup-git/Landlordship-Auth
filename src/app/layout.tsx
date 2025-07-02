import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import ProgressProvider from "./components/Layouts/nProgressBar";
import { MyContextProvider } from "@/context/NavProvider";
 import { ToastContainer} from 'react-toastify';

import ReactQueryProvider from "./components/Providers/QueryProvider";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Your Landlordship",
  description: "landlordship auth draft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
     
        <MyContextProvider>

     <ProgressProvider> 
   
           <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
       theme = "light"
        
        
        />
        <ReactQueryProvider>
      {children}
   </ReactQueryProvider>
      </ProgressProvider>  

      </MyContextProvider>

      </body>
    </html>
  );
}
