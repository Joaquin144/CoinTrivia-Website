"use client"
import React, {useEffect, useState} from 'react';
import firebase_app from "../../../firebase/clientApp";
import {getAuth, deleteUser} from "firebase/auth";
import {useRouter} from "next/navigation";
import {deleteDoc, doc, getFirestore} from "@firebase/firestore";
import {useAuthContext} from "@/context/authcontext";

const Dashboard = () => {
    // @ts-ignore
    //const { currentUser } = useAuthContext()//TODO: remove this suppress annotation
    const [showConfirmation, setShowConfirmation] = useState(false);
    const auth = getAuth(firebase_app);
    const firestore = getFirestore(firebase_app);
    const user = auth.currentUser;
    const router = useRouter();

    const handleDeleteData = async () => {
        setShowConfirmation(false)
        if (user) {
            const uid = user.uid;
            try {
                await deleteDoc(doc(firestore, "USERS", uid))
                //await firestore.collection('ABC').doc(uid).delete();
                console.log('Document successfully deleted!');
                deleteUser(user).then(() => {
                    router.replace('/')
                    alert(`Your Account has been deleted. We are sorry to see you go away.`);
                }).catch((error) => {
                    console.log(`Some Error occured while account deletion: ${error}`)
                    alert(`Some Error occured: ${error}`);
                })
            } catch (error) {
                console.error('Error deleting document:', error);
            }
        } else {
            alert(`Some Error occured: The current user is null. Please sign in again from your account.`);
        }
    }

    // useEffect(() => {
    //    if(user == null)  router.push("/");
    // }, [user]);

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <nav className="container mx-auto px-4 py-6">
                    <h1 className="text-2xl font-bold">Coin Trivia App</h1>
                </nav>
            </header>
            <main className="container mx-auto px-4 py-8">
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">About Us</h2>
                    <p className="text-gray-700">
                        Coin Trivia is a fun and engaging quiz game that tests your knowledge on various topics while
                        earning virtual points. Challenge yourself with thousands of trivia questions and compete with
                        friends for the top spot on the leaderboard. With its intuitive interface and engaging gameplay,
                        Coin Trivia is the ultimate trivia experience for all knowledge enthusiasts. Download now from
                        Google Play Store and start your trivia journey!
                    </p>
                </section>
                <section className="bg-white shadow-md rounded-lg p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Github Source Code</h2>
                    <a
                        href="https://github.com/Joaquin144/CoinTrivia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        View on GitHub
                    </a>
                </section>
                <section className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Request Delete my data</h2>
                    <button
                        onClick={() => setShowConfirmation(true)}
                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none"
                    >
                        Delete My Data
                    </button>
                    {/*   Show Confirmation Layout */}
                    {showConfirmation && (
                        <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-900 bg-opacity-75">
                            <div className="bg-white p-8 rounded-lg max-w-md">
                                <p className="text-lg mb-4">
                                    Are you sure you want to delete your data? This action cannot be undone.
                                </p>
                                <div className="flex justify-end">
                                    <button
                                        onClick={() => setShowConfirmation(false)}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md mr-2 focus:outline-none"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleDeleteData}
                                        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
};

export default Dashboard;