"use client"

import React, {useContext, useState} from 'react';
import {useRouter} from "next/navigation";
import firebase_app from "../../firebase/clientApp";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

const SignInComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const auth = getAuth(firebase_app);

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Sign in Successful: ", user);
                alert("sign in success")
                router.push('/dashboard');
            })
            .catch((error) => {
                console.log("Sign in Error. Please try again", error)
                alert(`SignIn failed: ${error}`)
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="bg-gray-900 text-white rounded-lg p-8 max-w-md w-full">
                <h1 className="text-4xl font-bold mb-6">Sign In</h1>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="text-lg">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 bg-gray-800 rounded-md border-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="text-lg">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-3 bg-gray-800 rounded-md border-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </form>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-md focus:outline-none"
                    onClick={handleSignIn}
                >
                    Sign In
                </button>
            </div>
        </div>
    );
};

export default SignInComponent;