import { Navigate } from 'react-router-dom';

interface AuthGuardProps {
  children: JSX.Element;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const isAuthenticated = !!localStorage.getItem('token'); // Replace this with your auth logic

  return isAuthenticated ? children : <Navigate to="/login" />;
}
