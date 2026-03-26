// import { createContext, useContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const checkAuth = async () => {
//             try {
//                 const res = await fetch('/api/me', { credentials: 'include' });
//                 if (res.ok) {
//                     const data = await res.json();
//                     setUser(data);
//                 } else {
//                     setUser(null);
//                 }
//             } catch (err) {
//                 setUser(null);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         checkAuth();
//     }, []);

//     const logout = () => setUser(null);

//     return (
//         <AuthContext.Provider value={{ user, setUser, loading, logout }}>
//             { children }
//         </AuthContext.Provider>
//     )
// }