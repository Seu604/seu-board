import type { ReactNode } from "react";

export type Me = {
    id: number;
    username: string;
    role: string;
}

export type MyAuthContext = {
    me: Me | null;
    setMe: (me: Me | null) => void;
    loading: boolean;
    logout: () => Promise<void>
}

export type AuthProviderProps = {
    children: ReactNode;
}