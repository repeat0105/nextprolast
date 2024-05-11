'use client'

import { SessionProvider } from "next-auth/react";
import Allheader from "./Allheader";

export default function Uiux({ children }) {
    return (
        <>
            <SessionProvider>
                <main>
                    <Allheader />
                    {children}
                
                </main>
            </SessionProvider>
        </>
    )
}