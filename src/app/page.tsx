import SignIn from "@/app/sign-in";
import "./globals.css";

export default function Home() {
    return (
        <>
            <main className='min-h-screen bg-gradient-to-br from-purple-800 to-pink-500 flex items-center justify-center'>
                <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
                    <h1 className='text-4xl p-4 text-center'>Coin Trivia Web App</h1>
                    <SignIn/>
                </div>
            </main>
        </>
    )
}
