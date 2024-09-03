import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

enum AuthStatus {
    'checking' = 'checking',
    'authenticated' = 'authenticated',
    'unauthenticated' = 'unauthenticated',
}

interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: User;
    isChecking: boolean;
    isAuthenticated: boolean;
    loginWithEmailPassword: (emai: string, password: string) => void;
    logout: () => void;
}

interface User {
    name: string;
    email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {

    const [status, setStatus] = useState(AuthStatus.checking);
    const [user, setUser] = useState<User>();

    useEffect(() => {

        setTimeout(() => {
            setStatus(AuthStatus.unauthenticated);
        }, 1500);// Despues de 1500 milisegundos, ejecutar el callback del setTimeout. Dicho callback internamente ejecuta la funcion setStatus


    }, []);

    const loginWithEmailPassword = (email: string, password: string) => {
        setUser({
            name: 'Cristian Hernández',
            email: email,
        });
        setStatus(AuthStatus.authenticated);
    }

    const logout = () => {
        setUser(undefined);
        setStatus(AuthStatus.unauthenticated);
    }

    return (
        <AuthContext.Provider value={{
            status: status,
            user: user,

            // Getter (getter es una propiedad computada porque dicha propiedad está basada en otra propiedad)
            isChecking: status === AuthStatus.checking,
            isAuthenticated: status === AuthStatus.authenticated,

            // Metodo (accion)
            loginWithEmailPassword,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
}