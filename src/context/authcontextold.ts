// import React, {ReactNode, useEffect, useState} from 'react';
// import {onAuthStateChanged, getAuth, User} from "@firebase/auth";
// import firebase_app from "../../firebase/clientApp";
//
// const auth = getAuth(firebase_app);
// export const Authcontextold = React.createContext({});
// export const useAuthContext = () => React.useContext(Authcontextold);
//
// export const AuthContextProvider = ({children}: { children: ReactNode }) => {
//     const [user, setUser] = useState<User | null>();
//     const [loading, setLoading] = useState(true);
//
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setUser(user);
//             } else {
//                 setUser(null);
//             }
//             setLoading(false);
//         });
//         return () => unsubscribe();
//     }, []);
//
//     // return (
//     //
//     // )
// };