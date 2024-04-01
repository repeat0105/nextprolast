'use client'
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { SessionProvider  } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function PagesLayout({ children }) {
  
  return (
    // layout이 2곳인경우 useSesstion을 사용 할 때 pages의 layout에 SesstionProvider
    // 가 있고 외부 layout에 SessionProvider 없으면 에러남  
    // pages의 layout에 자식은 부모의 부모가 SessionProvider 없으면 에러를 발생시킴
    <SessionProvider>
      {children}
    </SessionProvider>
    
  );
}