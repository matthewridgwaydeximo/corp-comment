import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Container, Footer } from "../lib/common.imports";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CorpComment -- Give Feedback Publicly",
    description: "Give feedback publicly to your favorite brands",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="app">
                    <Footer />
                    <Container>{children}</Container>
                </div>
            </body>
        </html>
    );
}
