import { createContext, useContext, useEffect, useState } from "react";
import { type Me, type AuthProviderProps, type MyAuthContext } from "../../type/Auth";

const AuthContext = createContext<MyAuthContext | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [me, setMe] = useState<Me | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:8080/api/auth/me", { 
                method: 'POST', 
                credentials: 'include' 
            }).then(res => {
                if (res.ok) return res.json();
                throw new Error('未ログイン');
            }).then(data => setMe(data))
            .catch(() => setMe(null))
            .finally(() => setLoading(false));
    }, []);

    const logout = async () => {
        await fetch("http://localhost:8080/api/auth/logout", {
            method: 'POST',
            credentials: 'include'
        });
        setMe(null);
    };

    return (
        <AuthContext.Provider value={{ me, setMe, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useMe = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("認証情報の取得前に提供過程が必要です");
    return context;
};