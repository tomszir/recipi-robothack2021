import { Navigate } from "react-router-dom";

import { useAuth } from "@/providers/auth";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}
