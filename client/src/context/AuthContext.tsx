import React, {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
// import { useDispatch } from "react-redux";
// import { updateUser } from "src/features/user/userSlice";
// import { getUserInfo } from "../user/services/userService";
// import { getCredential, signIn, signOut } from "./service/authService";

export interface AuthState {
  authenticated: boolean;
  login: (userName: string, password: string) => Promise<boolean>;
  logOut: () => void;
}

const AuthContext = createContext<AuthState | null>(null);

export const useAuth = (): AuthState | null => {
  return useContext(AuthContext);
};

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps): ReactElement => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // getCredential().then(async (credential) => {
    //   if (credential) {
    //     const user = await getUserInfo();
    //     dispatch(updateUser(user || null));
    //     setAuthenticated(!!user);
    //     setLoading(false);
    //   } else {
    //     setAuthenticated(false);
    //     setLoading(false);
    //   }
    // });
    setAuthenticated(true);
    setLoading(false);
  }, []);

  const login = async (username: string, password: string) => {
    // const isLoggedIn = await signIn(username, password);

    // if (isLoggedIn) {
    //   const user = await getUserInfo();
    //   dispatch(updateUser(user || null));
    //   setAuthenticated(true);
    // } else {
    //   setAuthenticated(false);
    // }
    // return isLoggedIn;

    setAuthenticated(true);
    return true;
  };

  const logOut = () => {
    // signOut();
    setAuthenticated(false);
    window.location.reload();
  };

  const value: AuthState = {
    authenticated,
    login,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
