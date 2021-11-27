import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import type { User } from "firebase/auth";
import { auth } from "../firebase";

export interface AuthContextState {
  user: User | null;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextState>({
  user: null,
  loading: true,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthContextState["user"]>(null);
  const [loading, setLoading] = useState<AuthContextState["loading"]>(true);
  const value = { loading, user };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};
