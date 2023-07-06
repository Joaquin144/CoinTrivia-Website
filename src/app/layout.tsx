import './globals.css'
import {Inter} from 'next/font/google'
import {AuthContextProvider} from "@/context/authcontext";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Coin Trivia Web App',
    description: 'Download our Coin Trivia Game when it releases on Google Play Store',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
        </body>
        </html>
    )
}
