import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ToasterProvider } from "@/components/toast/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Visionary",
    description: "An AI content generator",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider
            appearance={{
                // baseTheme: dark,
                variables: {
                    colorPrimary: "blue",
                },
            }}
        >
            <html lang="en">
                <body className={inter.className}>
                    <ToasterProvider />
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}